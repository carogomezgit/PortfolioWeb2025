import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio-service';
import { DatosPersonales } from '../../modules/datos-personales';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit {
  
  datos: DatosPersonales | undefined;
  cargando = true;
  error: string | null = null;

  formData = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  private portfolioService = inject(PortfolioService);

  ngOnInit() {
    this.portfolioService.obtenerInformacion().subscribe({
      next: (data) => {
        this.datos = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'No se pudo cargar la información de contacto.';
        this.cargando = false;
      },
    });
  }
}
