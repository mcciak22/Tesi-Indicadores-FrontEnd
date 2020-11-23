import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/core/services/servicio-cambionombre/name.service';

@Component({
  selector: 'registroalumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.scss']
})
export class RegistroAlumnosComponent implements OnInit {

  titulopagina: string = 'Registro de Alumnos';
  constructor(
    private titulo:NameService
  ) {
    this.titulo.titulopagina = this.titulopagina;
   }

  ngOnInit(): void {
  }
}