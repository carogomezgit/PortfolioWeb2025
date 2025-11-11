import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { SobreMi } from './features/sobre-mi/sobre-mi';
import { MisProyectos } from './features/mis-proyectos/mis-proyectos';
import { Contacto } from './features/contacto/contacto';

export const routes: Routes = [
    { path: 'sobremi', component: SobreMi}, // vista de sobre mí
    { path: 'proyectos', component: MisProyectos}, // vista de mis proyectos
    { path: 'contacto', component: Contacto}, // vista de contacto
    { path: '**', component: Home } // ruta por defecto
];