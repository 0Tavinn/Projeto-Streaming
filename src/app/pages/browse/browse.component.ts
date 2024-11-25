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
  filmeDeadPool : any;
  filmeDuna : any;
  filmeMoana2 : any;
  filmeGarfild : any;
  filmeJohn4 : any;
  filmeWicked : any;
  filmeSorria2 : any;
  filmeMeuMal : any;
  filmeDiverti : any;
  filmeOperacao : any;
  filmeAlien : any;
  filmeSubst : any;
  filmeNao : any


  IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
  IMAGE_SIZE = "w500"; // Tamanho das imagens

  ngOnInit() {
    this.loadMovies(); // Carregar ambos os filmes ao inicializar o componente
  }

  loadMovies() {
    const idFilmePantera = 284054; // ID do Pantera Negra
    const idFilmeVenom = 912649; // ID do Venom: A Última Rodada
    const idFilmeGladiadorII = 558449;
    const idFilmeDeadPool = 533535;
    const idFilmeDuna = 228528;
    const idFilmeMoana2 = 1241982;
    const idFilmeGarfild = 748783;
    const idFilmeJohn4 = 603692;
    const idFilmeWicked = 402431;
    const idFilmeSorria2 = 1100782;
    const idFilmeMeuMal = 519182;
    const idFilmeDiverti = 1022789;
    const idFilmeOperacao = 845781;
    const idFilmeAlien = 945961;
    const idFilmeSubst = 933260;
    const idFilmeNao = 762504


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
    });
    this.filmeService.getMovieById(idFilmeDeadPool).subscribe((result:any) => {
      console.log(result);
      this.filmeDeadPool = result;
    });
    this.filmeService.getMovieById(idFilmeDuna).subscribe((result:any) => {
      console.log(result);
      this.filmeDuna = result;
    });
    this.filmeService.getMovieById(idFilmeMoana2).subscribe((result:any) => {
      console.log(result);
      this.filmeMoana2 = result;
    });
    this.filmeService.getMovieById(idFilmeGarfild).subscribe((result:any) => {
      console.log(result);
      this.filmeGarfild = result;
    });
    this.filmeService.getMovieById(idFilmeJohn4).subscribe((result:any) => {
      console.log(result);
      this.filmeJohn4 = result;
    });
    this.filmeService.getMovieById(idFilmeWicked).subscribe((result:any) => {
      console.log(result);
      this.filmeWicked = result;
    });
    this.filmeService.getMovieById(idFilmeSorria2).subscribe((result:any) => {
      console.log(result);
      this.filmeSorria2 = result;
    });
    this.filmeService.getMovieById(idFilmeMeuMal).subscribe((result:any) => {
      console.log(result);
      this.filmeMeuMal = result;
    });
    this.filmeService.getMovieById(idFilmeDiverti).subscribe((result:any) => {
      console.log(result);
      this.filmeDiverti = result;
    });
    this.filmeService.getMovieById(idFilmeOperacao).subscribe((result:any) => {
      console.log(result);
      this.filmeOperacao = result;
    });
    this.filmeService.getMovieById(idFilmeAlien).subscribe((result:any) => {
      console.log(result);
      this.filmeAlien = result;
    });
    this.filmeService.getMovieById(idFilmeSubst).subscribe((result:any) => {
      console.log(result);
      this.filmeSubst = result;
    });
    this.filmeService.getMovieById(idFilmeNao).subscribe((result:any) => {
      console.log(result);
      this.filmeNao = result;
    })
  }

  // Função para criar a URL completa das imagens
  getImageUrl(path: string): string {
    return `${this.IMAGE_BASE_URL}${this.IMAGE_SIZE}${path}`;
  }
}
