import { Component, OnInit } from '@angular/core';
import { NameService } from 'src/app/core/services/servicio-cambionombre/name.service';

@Component({
  selector: 'registromaestros',
  templateUrl: './registro-maestros.component.html',
  styleUrls: ['./registro-maestros.component.scss']
})
export class RegistroMaestrosComponent implements OnInit {
  titulopagina: string = 'Registro de Maestros';
  constructor(
    private titulo:NameService
  ) {
    this.titulo.titulopagina = this.titulopagina;
   }

  ngOnInit(): void {
  }
}
