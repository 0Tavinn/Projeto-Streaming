import { Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { AuthService } from '../login/login.auth.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './registro.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]

})
export class RegistroComponent {
  email: string = '';
  senha: string = '';
  confirmar_senha: string = '';
  termsAccepted: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onRegister() {
    // Validate inputs
    if (!this.email || !this.senha || !this.confirmar_senha) {
      this.errorMessage = 'Por favor, preencha todos os campos';
      return;
    }

    if (this.senha !== this.confirmar_senha) {
      this.errorMessage = 'As senhas não conferem';
      return;
    }

    if (!this.termsAccepted) {
      this.errorMessage = 'Você deve aceitar os Termos e Condições';
      return;
    }

    this.authService.register(this.email, this.senha, this.confirmar_senha).subscribe({
      next: (response: any) => {

        // Redireciona para a página de login com mensagem de sucesso
      this.router.navigate(['../login'], {
        state: { successMessage: 'Usuário registrado com sucesso!' }
      });
    },
      error: (error) => {
        // Handle registration error
        this.errorMessage = error.error?.msg || 'Erro ao registrar usuário';
      }
    });
  }
}
