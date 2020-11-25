import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NameService } from 'src/app/core/services/servicio-cambionombre/name.service';
import { UsuariosService } from '../../../core/services/servicio-usuarios/usuarios.service';
import { AutenticacionService } from '../../../core/services/autenticacion/autenticacion.service';
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
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(
    public nameService: NameService,
    private usuarioService: UsuariosService,
    private authservice: AutenticacionService
  ) {
    this.nameService.titulopagina = this.titulopagina;
    

  }
  ngOnInit(): void {
    //location.reload()
    this.usuarioService.ObtenerTodosLosUsuarios().subscribe((data: any) => {
     // console.log(data);
    });
  }
  logout(){
    this.authservice.logout();

  }
}
