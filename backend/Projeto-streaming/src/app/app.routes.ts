import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { RegistroComponent } from './pages/registro/registro.component';
import path from 'node:path';
import { DinnerComponent } from './pages/dinner/dinner.component';
import { PasswordComponent } from './pages/password/password.component';
import { SinopseComponent } from './sinopse/sinopse.component';
import { InicioComponent } from './pages/inicio/inicio.component';


export const routes: Routes = [
    {
        path: "login",
        component:LoginComponent
    },
    {
        path:"browse",
        component:BrowseComponent
    },
    {
        path:"registro",
        component:RegistroComponent
    },
    {
        path:"dinner",
        component:DinnerComponent
    },
    {
        path:"password",
        component:PasswordComponent
    },
    {
        path:"sinopse",
        component:SinopseComponent
    },
    {
        path:"inicio",
        component:InicioComponent
    },
    {
        path:"**",
        redirectTo:"inicio"
    },
];
