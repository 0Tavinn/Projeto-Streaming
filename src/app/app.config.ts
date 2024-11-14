import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http'; // Importei as configurações necessárias para a aplicação, incluindo o roteador e o cliente HTTP

// Configurei o aplicativo habilitando o cliente HTTP para requisições
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient() // Ativei o cliente HTTP
  ]
  
};
