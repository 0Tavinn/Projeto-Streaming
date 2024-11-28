import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importei o HttpClient e configurei a classe para ser injetável em toda a aplicação
import { inject, Injectable } from '@angular/core';
import { tmdbConfig } from '../constants/config';

@Injectable({
  providedIn: 'root'
})
export class ApiFilmesService {

  httpService = inject(HttpClient); // Injeta o HttpClient para requisições HTTP

  // Método para buscar filmes populares (já existente)
  getPopularMovies(page: number = 1) {
    const headers = this.getHeaders();
    return this.httpService.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&language=pt-BR`, {
      headers: headers
    });
  }

  // Novo método para buscar um filme específico pelo ID
  getMovieById(id: number) {
    const headers = this.getHeaders();
    return this.httpService.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, {
      headers: headers
    });
  }

  // Método para definir os cabeçalhos da requisição
  getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append("accept", "application/json");
    headers = headers.append("Authorization", "Bearer " + tmdbConfig.accessToken);
    return headers;
  }
}