import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio-service';
import { DatosPersonales } from '../../modules/datos-personales';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto implements OnInit {
  
  datos: DatosPersonales | undefined;
  cargando = true;
  error: string | null = null;

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