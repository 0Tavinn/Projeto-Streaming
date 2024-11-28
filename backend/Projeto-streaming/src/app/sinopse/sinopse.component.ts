import { Component } from '@angular/core';
import { ApiFilmesService } from '../pages/servicos/api-filmes.service'; // Serviço da API de filmes
import { ActivatedRoute } from '@angular/router'; // Para acessar o ID do filme da URL
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinopse',
  standalone: true,
  imports: [],
  templateUrl: './sinopse.component.html',
  styleUrl: './sinopse.component.scss'
})
export class SinopseComponent {
 
  constructor(private router: Router) {}

  onSinopse(): void {
    this.router.navigate(['/dinner']);
  }

}
