import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importei o HttpClient e configurei a classe para ser injetável em toda a aplicação
import { inject, Injectable } from '@angular/core';
import { tmdbConfig } from '../constants/config';

@Injectable({
  providedIn: 'root'
})
export class ApiFilmesService {

  httpService = inject(HttpClient) // Injetei o HttpClient para poder fazer requisições HTTP

  getPopularMovies(){ // Criei o método getPopularMovies() para buscar os filmes populares usando uma requisição GET.
    const headers=this.getHeaders();
    return this.httpService.get("https://api.themoviedb.org/3/movie/popular",{
      headers:headers
    });
}

  getHeaders(){ // Método para configurar os cabeçalhos da requisição.
    let headers = new HttpHeaders(); // Criando uma instância dos cabeçalhos.
    headers = headers.append("accept","application/json"); // Definindo que aceitamos respostas em formato JSON.
    headers = headers.append("Authorization","Bearer "+tmdbConfig.accessToken) // Adicionando o token de autorização da API.
    return headers;// Retornando os cabeçalhos configurados.
  }


}
