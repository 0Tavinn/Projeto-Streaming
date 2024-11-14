import { Component, inject } from '@angular/core';
import { ApiFilmesService } from '../servicos/api-filmes.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {
  
  // Injetando o serviço que faz a conexão com a API de 
  filmeService = inject(ApiFilmesService)
  
  // Array que armazenará os filmes populares recebidos da API
  popularMovie:any[]=[]
  
  // Método executado ao inicializar o componente.
  ngOnInit() {

      // Chamando o método `getPopularMovies()` do serviço para obter filmes populares.
      this.filmeService.getPopularMovies().subscribe((result:any) => {
      console.log(result); // Exibe o resultado no console para fins de depuração.
      this.popularMovie=result.results; // Armazena a lista de filmes populares em `popularMovie`
    });
  }
}