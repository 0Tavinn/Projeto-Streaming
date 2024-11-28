import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  constructor(private router: Router) {}

  onLogin(): void {
    this.router.navigate(['/browse']);
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

  
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Validações básicas
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (!email) {
        alert("O email é obrigatório.");
        return;
      }

      alert("Cadastro realizado com sucesso!");
      form.reset(); // Limpa o formulário após o cadastro
    });
  }) 

   const form = document.querySelector("form");
  // Outros acessos ao DOM
}
