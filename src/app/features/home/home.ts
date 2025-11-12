import { Component, inject, OnInit } from '@angular/core';
import { DatosPersonales } from '../../modules/datos-personales';
import { PortfolioService } from '../../services/portfolio-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

datos: DatosPersonales | undefined;
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
