import { Component, inject, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-proyectos',
  imports: [CommonModule],
  templateUrl: './mis-proyectos.html',
  styleUrl: './mis-proyectos.css',
})

export class MisProyectos implements OnInit{

  

  proyectos: MisProyectos[] = [];
  cargando = true; // indicador de carga
  error: string | null = null; // para manejar errores

// inyecto el servicio que voy a usar
  private portfolioService = inject(PortfolioService);
  ngOnInit() { // metodo que se ejecuta al cargar el componente
  
  // llamo al metodo obtenerProyectos del servicio para obtener los proyectos
    this.portfolioService.obtenerProyectos().subscribe({
      next: (data) => {
      
        this.proyectos = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'No se pudieron cargar los proyectos.';
        this.cargando = false;
      },
    });
  }
}
