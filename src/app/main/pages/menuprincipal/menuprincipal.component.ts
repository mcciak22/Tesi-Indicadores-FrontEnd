import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NameService } from 'src/app/core/services/servicio-cambionombre/name.service';
import { UsuariosService } from '../../../core/services/servicio-usuarios/usuarios.service';
import { AutenticacionService } from '../../../core/services/autenticacion/autenticacion.service';
import { UsuarioLocal } from 'src/app/core/models/modelos-usuario/usuariolocalmodel';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.scss'],
  providers: [UsuariosService],
})
export class MenuPrincipalComponent implements OnInit {
  @Output() EmitirEvento: EventEmitter<any> = new EventEmitter();
  titulopagina = 'Menu Principal';
  usuarioLocal: UsuarioLocal;
  constructor(
    public nameService: NameService,
    private usuarioService: UsuariosService,
    private authservice: AutenticacionService
  ) {
    this.usuarioLocal = JSON.parse(localStorage.getItem('Usuario'));
    this.nameService.titulopagina = this.titulopagina + ' ' + this.usuarioLocal.Rol;
  }
  ngOnInit(): void {
    // location.reload()
    this.usuarioService.ObtenerTodosLosUsuarios().subscribe((data: any) => {
      // console.log(data);
    });
  }
  logout(): void {
    this.authservice.logout();
  }
}
