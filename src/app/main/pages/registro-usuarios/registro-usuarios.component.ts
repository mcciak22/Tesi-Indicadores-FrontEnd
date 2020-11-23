import { Component, OnInit } from '@angular/core';
import { NameService } from '../../../core/services/servicio-cambionombre/name.service';

@Component({
  selector: 'registrousuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss']
})
export class RegistroUsuariosComponent implements OnInit {
  titulopagina: string = 'Registro de Usuarios';
  constructor(
    private titulo:NameService
  ) {
    this.titulo.titulopagina = this.titulopagina;
   }

  ngOnInit(): void {
  }

}
