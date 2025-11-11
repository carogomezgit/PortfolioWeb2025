import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sobre-mi',
  imports: [FormsModule],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  nombre: String = "Carolina Araceli";
  apellido: String = "Gomez";
  edad: number = 23;
  profesion: String = "Desarrolladora de Software";
  foto: string = 'assets/images/foto-perfil.jpg';
}
