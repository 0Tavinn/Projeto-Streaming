import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/user'; // Adjust this to your backend URL

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, { email, senha });
  }

  register(email: string, senha: string, confirmar_senha: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, {
      email,
      senha,
      confirmar_senha
    });
  }

  // Optional: Method to store and retrieve token
  setToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  removeToken(): void {
    localStorage.removeItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
