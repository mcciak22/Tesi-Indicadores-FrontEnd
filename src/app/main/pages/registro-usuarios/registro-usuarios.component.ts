import { Component, OnInit } from '@angular/core';
import { NameService } from '../../../core/services/servicio-cambionombre/name.service';
import { UsuariosService } from '../../../core/services/servicio-usuarios/usuarios.service';
import { Usuario } from '../../../core/models/modelos-usuario/usuariomodel';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import {
  UsuarioModel,
  UsuariosModel,
} from '../../../core/models/modelos-usuario/usuariosmodel';

@Component({
  selector: 'registrousuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss'],
})
export class RegistroUsuariosComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'Nombre',
    'Apellidos',
    'Email',
    'Rol',
    'Carrera',
  ];

  titulopagina = 'Registro de Usuarios';
  arregloUsuarios = [];
  ArregloRegistro: any[];
  UsuariosAdd: Usuario[];
  Columnas: any[];
  Usuarios: Usuario[];
  dataSource: MatTableDataSource<Usuario>;
  selection: SelectionModel<Usuario>;
  visible = true;
  Ids = [];
  checked = false;
  constructor(
    private titulo: NameService,
    private usuariosService: UsuariosService
  ) {
    this.titulo.titulopagina = this.titulopagina;
  }

  ngOnInit(): void {
    this.ObtenerTodosLosUsuarios();
  }
  ObtenerTodosLosUsuarios(): void {
    this.usuariosService
      .ObtenerTodosLosUsuarios()
      .subscribe((usuarios: UsuariosModel) => {
        this.Usuarios = usuarios.usuarios;
        console.log(usuarios);

        this.dataSource = new MatTableDataSource<Usuario>(this.Usuarios);
        this.selection = new SelectionModel<Usuario>(true);
      });
  }
  SeleccionarTodo(): void {
    if (this.checked === false) {
      this.checked = true;
      this.visible = false;
      for (const key in this.Usuarios) {
        if (Object.prototype.hasOwnProperty.call(this.Usuarios, key)) {
          const element = this.Usuarios[key].id_usuario;
          const id = element;
          if (this.Ids.length <= this.Usuarios.length) {
            this.Ids.push(id);
          }
        }
      }
    }
  }

  DesleccionarTodo(): void {
    if (this.checked === true) {
      this.checked = false;
      this.visible = true;
      this.QuitarFilas(this.Ids);
    }
  }

  AgregarFilas(ids: string): any {
    this.Ids.push(ids);
    if (this.Ids.length >= 0) {
    }
    return {
      agregar: this.Ids,
    };
  }
  QuitarFilas(ids: any): void {
    this.Ids = this.Ids.filter((s) => s !== ids);
  }
  EliminarRegistros(): void {
    this.Ids.forEach((element) => {
      this.usuariosService.EliminarUsuario(element).subscribe((result: any) => {
      });
    });
    location.reload();
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  Escuchar(event): void {
    this.arregloUsuarios = event;
    this.arregloUsuarios.forEach((element) => {
      delete element.No;
    });

    this.UsuariosAdd = this.arregloUsuarios;

    this.UsuariosAdd.forEach((elemento) => {
      this.usuariosService.InsertarUsuario(elemento).subscribe(
        (resultado: any) => {
          console.log(resultado);
        },
        (error: any) => {
          // console.log(error);
        }
      );
    });

    setTimeout(() => {
      location.reload();
    }, 2000);
  }
}
