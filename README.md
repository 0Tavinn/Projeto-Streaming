# Projeto Facultativo: Integração da API TMDB em uma Tela Web Inicial

Este projeto tem como objetivo integrar a API do TMDB (The Movie Database) em uma aplicação web, exibindo informações como título, imagem, data de lançamento, gênero, e avaliação de filmes populares. A ideia principal é desenvolver habilidades de integração com APIs e exibir os dados em uma interface web inicial utilizando tecnologias modernas.


## Tecnologias Utilizadas

- Angular 17: Framework JavaScript para construção da interface web.
  
- TailwindCSS: Framework CSS para estilização rápida e eficiente.
  
- TMDB API: API externa que fornece dados sobre filmes, séries, e celebridades.
  
- TypeScript: Linguagem usada para tipagem estática, integrada ao Angular.
  
- HTML e CSS: Estruturação e estilização da interface.

## Pré-requisitos

Para rodar este projeto, você precisa ter:

- Node.js e npm instalados para gerenciamento de dependências e execução de comandos.

Angular CLI instalado globalmente:

```bash
npm install -g @angular/cli
```

3.#Chave de API do TMDB#: Crie uma conta no TMDB e obtenha uma chave de API para realizar requisições.

## Estrutura do Projeto

```bash
├── src
│   ├── app
│   │   ├── services
│   │   │   └── tmdb.service.ts        # Serviço para consumir a API do TMDB
│   │   ├── components
│   │   │   └── movies
│   │   │       ├── movies.component.ts    # Componente para exibir os filmes
│   │   │       ├── movies.component.html  # Template do componente
│   │   │       └── movies.component.css   # Estilos do componente
│   │   └── app.component.html         # Template principal onde os componentes são inseridos
└── README.md                         # Documentação do projeto
```

## Configuração e Instalação

- Clone o repositório:

bash
1. Copiar código

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

3. Instale as dependências:

```bash
npm install
```

3. Adicione a chave da API do TMDB:

No arquivo `tmdb.service.ts`, insira sua chave da API onde indicado:

```bash
typescript
Copiar código
private apiKey = 'SUA_CHAVE_API';
```

4. Execute o servidor de desenvolvimento:

```bash
Copiar código
ng serve
```

5. Acesse a aplicação: Abra seu navegador e vá para `http://localhost:4200`.


## Funcionalidades

- Listagem de Filmes Populares: Exibe uma lista de filmes populares recuperados da API do TMDB, incluindo título, imagem, data de lançamento, avaliação, e um breve resumo.

- Interface Responsiva: Utilizando TailwindCSS para garantir que a interface seja adaptada para dispositivos móveis e desktops.

- Carregamento Dinâmico: Os dados dos filmes são carregados dinamicamente da API page.

## Componentes e Serviços

`mdb.service.ts`: Serviço Angular responsável por fazer chamadas à API do TMDB.

`movies.component.ts`: Componente Angular que consome o serviço e exibe os dados dos filmes.

`movies.component.html`: Template para exibir a lista de filmes com imagens e informações relevantes.

## Exemplo de Código

#Serviço para Consumo da API (`tmdb.service.ts`)

```bash
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = 'SUA_CHAVE_API';
  private baseUrl = 'https://api.themoviedb.org/3';
  private imageUrl = 'https://image.tmdb.org/t/p/w500';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getImageUrl(path: string): string {
    return `${this.imageUrl}${path}`;
  }
}
```

- Template para Exibição de Filmes (`browse.component.html`)

```bash
<div class="bg-gray-900 p-8">
  <h2 class="text-center text-2xl font-bold mb-6 text-white">Filmes Populares</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div *ngFor="let movie of movies" class="bg-gray-800 p-4 text-center rounded">
      <img
        [src]="getImageUrl(movie.poster_path)"
        alt="{{ movie.title }}"
        class="w-full h-64 object-cover rounded mb-4"
      />
      <h3 class="font-semibold text-white">{{ movie.title }}</h3>
      <p class="text-gray-400">Data de lançamento: {{ movie.release_date }}</p>
      <p class="text-gray-400">Avaliação: {{ movie.vote_average }}</p>
      <p class="text-gray-300 text-sm">{{ movie.overview | slice:0:100 }}...</p>
    </div>
  </div>
</div>
```

## Personalização e Expansão

- Este projeto pode ser facilmente expandido para incluir novas funcionalidades, como:

- Pesquisa de Filmes: Adicionar um campo de pesquisa para buscar filmes específicos na API do TMDB.

- Filtros por Gênero ou Ano: Implementar filtros para exibir filmes por gênero ou ano de lançamento.

- Detalhes do Filme: Criar uma página de detalhes para cada filme, com informações adicionais.

## Contribuições

Este é um projeto de aprendizado, e contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests para aprimorar a funcionalidade e corrigir bugs.

## Licença

Este projeto é apenas para fins educativos e acadêmicos. Consulte a documentação da API do TMDB para verificar as restrições de uso.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.
