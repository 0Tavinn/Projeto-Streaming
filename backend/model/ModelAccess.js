// Importa o módulo 'fs' para trabalhar com o sistema de arquivos
var fs = require('fs');

// Importa a classe 'HandleDBMSMySQL' para gerenciar conexões e operações com o banco de dados MySQL
var HandleDBMSMySQL = require('../config/database/HandleDBMSMySQL');

// Define a classe 'ModelUser' para gerenciar acessos ao sistema
class ModelUser {

  // O construtor inicializa uma instância de 'HandleDBMSMySQL'
  constructor() {
    this._HandleDBMSMySQL = new HandleDBMSMySQL();
  }

  // Método para destruir objetos, utilizado para lançar um erro se os parâmetros forem incorretos
  destroy(param=null) {
    // Função para obter o nome da variável
    var varToString = varObj => Object.keys(varObj)[0];
    // Lança um novo erro com informações sobre o parâmetro incorreto
    new Error('Parâmetros incorretos para a classe: `%s`, parâmetro `%s`', this.constructor.name, varToString({param}));
  }

  // Método para buscar registros de acesso com suporte a paginação
  getUsuario(limit=0, offset=0) {
    // Lê o arquivo de configuração 'env.json' para obter informações do banco de dados
    var envFile = JSON.parse(fs.readFileSync('./config/server/env.json', 'utf8', 'r'));

    // Define os limites de consulta
    var _limit  = limit;
    var _offset = offset;

    // Declaração SQL vazia que será construída com base nas condições
    var sql = ``;

    // Se os limites de paginação forem nulos, busca todos os registros
    if ( ( _limit === null ) && ( _offset === null) ) {
      sql = `select email, senha from ` + envFile.database + `.usuario order by email desc`;
      
    } 
    // Se os limites de paginação forem números válidos, aplica a paginação
    else if ( ( typeof _limit === 'number' && _limit >= 0 ) && ( typeof _offset === 'number' && _offset >= 1 ) ) {
      sql = `select * from ` + envFile.database + `.usuario order by email desc limit ` + _limit + `, ` + _offset;
    } 
    // Se os parâmetros forem inválidos, exibe uma mensagem de erro
    else {
      console.error('Parâmetros incorretos para a classe: `%s`', this.constructor.name);
    }
    // Executa a consulta usando o método 'query' da instância de 'HandleDBMSMySQL'
    return this._HandleDBMSMySQL.query(sql);
    
  }
  
  findUsuarioByEmail(email, senha) {
    return new Promise((resolve, reject) => {
      // Define a consulta SQL para buscar o usuário pelo email
      const query = 'SELECT email, senha FROM usuario WHERE email = ?';
      
      // Executa a consulta usando o método 'query' da classe HandleDBMSMySQL
      this._HandleDBMSMySQL.query(query, [email])
        .then(result => {
          // Extrai apenas os dados da resposta
          const data = result.data || [];
          resolve(data.length > 0 ? data[0] : null); // Retorna o primeiro registro ou null se não encontrado
        })
        .catch(err => {
          // Rejeita a Promise em caso de erro
          reject(err);
        });
    });
  }

  // Método para inserir um novo registro de acesso no banco de dados
  postUsuario(email = null, senha = null, confirmar_senha=null) {
    
    // Valida o timestamp, hostname e ip; se inválidos, chama o método 'destroy' para lançar um erro
    this._email     = ( typeof email        !== 'string' || email     === null ) ? this.destroy(email)        : email;
    this._senha     = ( typeof senha        !== 'string'|| senha     === null ) ? this.destroy(senha)       : senha;
    this._confirmar_senha     = ( typeof confirmar_senha        !== 'string' || confirmar_senha     === null ) ? this.destroy(confirmar_senha)        : confirmar_senha;
    
    // Lê o arquivo de configuração 'env.json' para obter informações do banco de dados
    var envFile = JSON.parse(fs.readFileSync('./config/server/env.json', 'utf8', 'r'));

    // Cria a declaração SQL para inserir o novo registro
    var sqlInsert = `insert into ${envFile.database}.usuario values ('${this._email}','${this._senha}','${this._confirmar_senha}')`;

    // Executa a inserção usando o método 'insert' da instância de 'HandleDBMSMySQL'
    return this._HandleDBMSMySQL.insert(sqlInsert);

    
  }

}

// Exporta a classe 'ModelUser' para que possa ser usada em outros módulos
module.exports = ModelUser;
