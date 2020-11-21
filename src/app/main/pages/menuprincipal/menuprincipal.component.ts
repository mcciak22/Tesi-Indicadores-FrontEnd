import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NameService } from 'src/app/core/services/servicio-cambionombre/name.service';
import { UsuariosService } from '../../../core/services/servicio-usuarios/usuarios.service';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {
  @Output() EmitirEvento: EventEmitter<any> = new EventEmitter();
  titulopagina = 'Menu Principal';

  constructor(
    public nameService: NameService,
    private usuarioService: UsuariosService
  ) {
    this.nameService.titulopagina = this.titulopagina;
  }
  ngOnInit(): void {
    this.usuarioService.ObtenerTodosLosUsuarios().subscribe((data: any) => {
      console.log(data);
    });
  }
}
