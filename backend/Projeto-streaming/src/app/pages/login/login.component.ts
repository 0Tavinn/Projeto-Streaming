import { Component } from '@angular/core';
import { Router, RouterModule  } from '@angular/router';
import { AuthService } from './login.auth.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Add this import
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule ]

})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  errorMessage: string = '';
  successMessage: string = ''; // Adicione esta linha

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    // Captura a mensagem de sucesso do estado de navegação
    const navigation = this.router.getCurrentNavigation();
    this.successMessage = navigation?.extras?.state?.['successMessage'] || ''; 
    // Validate input
    if (!this.email || !this.senha) {
      this.errorMessage = 'Por favor, preencha todos os campos';
      return;
    }

    this.authService.login(this.email, this.senha).subscribe({
      next: (response: any) => {
        // Extract token from response
        const token = response.msg.split(' ').pop();

        // Store the token
        this.authService.setToken(token);

        // Navigate to home or dashboard
        this.router.navigate(['../browse']);
      },
      error: (error) => {
        // Handle login error
        this.errorMessage = error.error?.msg || 'Erro ao fazer login';
      }
    });
  }
}
