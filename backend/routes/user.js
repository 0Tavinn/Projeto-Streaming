// Importa o módulo 'express'
var express = require('express');
var fs = require('fs');
// Cria um roteador usando o 'express'
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
// Importa o modelo 'ModelUser'
var ModelUser = require('../model/ModelAccess');

// Cria uma instância de 'ModelUser'
var _ModelUser = new ModelUser();

// Define a rota para '/'
router.route('/')
  // Método GET para obter usuários
  .get(function (req, res, next) {
    _ModelUser.getUsuario(null, null)
      .then(resultJSON => {
        res.status(200).json(resultJSON).end();
      })
      .catch(err => {
        console.error('Erro na requisição `get` para o recurso: ' + err);
        res.status(500).json({ error: 'Erro na requisição `get` para o recurso: ' + err }).end();
      });
  });

  router.get('/:id', checkToken, async(req, res)=>{
    const id = req.params.id

    //verifica se usuario existe
    const user = await _ModelUser.findUsuarioByEmail(id)
    
    if(!ModelUser){
      return res.status(404).json({msg:"Usuario não encontrado!"});
    }
    res.status(200).json({user})
  });

  function checkToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
      return res.status(401).json({ msg: 'Acesso negado'})
    }
    try{
      var session_file = JSON.parse(fs.readFileSync('./config/server/env.json', 'utf8', 'r'));
      const _secret = session_file.secret
      jwt.verify(token, _secret)

      next()
    } catch(error){
      res.status(400).json({msg: "Token inválido!"})
    }
  }

// Método POST para criar um novo usuário
router.post('/register', async (req, res) => {
  try {
    const { email, senha, confirmar_senha } = req.body
    if (!email) {
      return res.status(422).json({ msg: 'O E-mail é obrigatório!' })
    }
    if (!senha) {
      return res.status(422).json({ msg: 'O senha é obrigatório!' })
    }
    if (senha !== confirmar_senha) {
      return res.status(422).json({ msg: 'As senhas não conferem!' })
    }
    // verifica se existe o mesmo usuario
    const userExist = await _ModelUser.findUsuarioByEmail(email); // Método para buscar o usuário
    if (userExist) {
      return res.status(422).json({ msg: 'Por favor, utilize outro E-mail' })

    }
    // cria senha criptografada
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(senha, salt)

    await _ModelUser.postUsuario(email, passwordHash, passwordHash);// Passa senha criptografada para ambas as colunas

    res.status(200).json("Usuário Registrado com sucesso!").end();

  } catch (err) {
    console.error('Erro ao registrar o usuário: ' + err);
    res.status(500).json({ error: 'Erro interno no servidor, tente novamente mais tarde: ' + err }).end();
  }
});
// método post para logar o usuario
router.post('/auth/login', async (req, res) => {
  const { email, senha } = req.body
  // validação
  if (!email) {
    return res.status(422).json({ msg: 'O E-mail é obrigatório!' })
  }
  if (!senha) {
    return res.status(422).json({ msg: 'O senha é obrigatório!' })
  }
  // verifica se existe usuario
  const user = await _ModelUser.findUsuarioByEmail(email); // Método para buscar o usuário
  if (!user) {
    return res.status(422).json({ msg: 'Usuario não encontrado!' })
  }

  //verificação de senha e validação
  const checkpassword = await bcrypt.compare(senha, user.senha)

  if (!checkpassword) {
    return res.status(422).json({ msg: 'Senha inválida!' })
  }
  try {
    var session_file = JSON.parse(fs.readFileSync('./config/server/env.json', 'utf8', 'r'));
    const secret = session_file.secret

    const token = jwt.sign(
    {
      email: user._email,

    },
      secret,
    )
    res.status(200).json({msg: "Altenticação realizada com sucesso! "+token})
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: 'Erro interno no servidor, tente novamente mais tarde:' + err }).end();
  }

})

// Exporta o roteador
module.exports = router;
