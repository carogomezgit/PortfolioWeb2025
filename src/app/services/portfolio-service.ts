import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { DatosPersonales } from '../modules/datos-personales';
import { Proyectos } from '../modules/proyectos';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {

  constructor(private http: HttpClient) {}

  // metodo para obtener informacion desde el archivo JSON
  obtenerInformacion(): Observable<DatosPersonales> {
    return this.http.get<DatosPersonales>(environment.informacionUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })
      );
  }

  // metodo para obtener proyectos desde el archivo JSON
  obtenerProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(environment.proyectosUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error al cargar el archivo JSON', error);
          return throwError(() => new Error('No se pudo cargar el archivo JSON'));
        })
      );
  }
  
}
