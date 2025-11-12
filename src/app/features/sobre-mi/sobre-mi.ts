import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio-service';
import { DatosPersonales } from '../../modules/datos-personales';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-sobre-mi',
  imports: [CommonModule, RouterLink],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi implements OnInit {
  
  datos: DatosPersonales = {
    nombre: '',
    apellido: '',
    edad: 0,
    titulo: '',
    institucion: '',
    descripcion: '',
    foto: '',
    email: '',
    telefono: '',
    github: '',
    fotoCarrera: '',
    fotoInstituto: ''
  }
  cargando = true;
  error: string | null = null;

  // inyecta el servicio
  private portfolioService = inject(PortfolioService);

  ngOnInit() {
    // llama al método del servicio
    this.portfolioService.obtenerInformacion().subscribe({
      next: (data) => {

        this.datos = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'No se pudo cargar la información personal.';
        this.cargando = false;
      },
    });
  }
}
