import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { ApiFilmesService } from '../servicos/api-filmes.service'; // Seu serviço para buscar os filmes

@Component({
  selector: 'app-browse',
  standalone: true,  // Definindo o componente como independente
  imports: [CommonModule], // Adicionando o CommonModule aos imports
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {

  filmeService = inject(ApiFilmesService); // Injeção do serviço
  filmePantera: any; // Variável para armazenar o filme Pantera Negra
  filmeVenom: any; // Variável para armazenar o filme Venom: A Última Rodada
  filmeGLadiadorII: any;

  IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  IMAGE_SIZE = "w500"; // Tamanho das imagens

  ngOnInit() {
    this.loadMovies(); // Carregar ambos os filmes ao inicializar o componente
  }

  loadMovies() {
    const idFilmePantera = 284054; // ID do Pantera Negra
    const idFilmeVenom = 912649; // ID do Venom: A Última Rodada
    const idFilmeGladiadorII = 558449

    // Carregar o Pantera Negra
    this.filmeService.getMovieById(idFilmePantera).subscribe((result: any) => {
      console.log(result); // Para depuração
      this.filmePantera = result; // Armazena o Pantera Negra
    });

    // Carregar o Venom: A Última Rodada
    this.filmeService.getMovieById(idFilmeVenom).subscribe((result: any) => {
      console.log(result); // Para depuração
      this.filmeVenom = result; // Armazena o Venom
    });

    this.filmeService.getMovieById(idFilmeGladiadorII).subscribe((result:any) => {
      console.log(result);
      this.filmeGLadiadorII = result;
    })
  }

  // Função para criar a URL completa das imagens
  getImageUrl(path: string): string {
    return `${this.IMAGE_BASE_URL}${this.IMAGE_SIZE}${path}`;
  }
}
