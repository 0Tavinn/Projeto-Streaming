import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  
};

if (typeof document !== 'undefined') {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;
  
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Validações básicas
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
  
      if (!email) {
        alert("O email é obrigatório.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
      }
  
  
      alert("Cadastro realizado com sucesso!");
      form.reset(); // Limpa o formulário após o cadastro
    });
  }) 

  
  
  const form = document.querySelector("form");
  // Outros acessos ao DOM
}

