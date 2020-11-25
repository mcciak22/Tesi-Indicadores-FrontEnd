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

  titulopagina: string = 'Registro de Usuarios';
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
  ObtenerTodosLosUsuarios() {
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
    //console.log(this.Usuarios);
   // console.log(this.Filas);
 
    if (this.checked === false) {
      this.checked = true;
      this.visible = false;
      for (const i in this.Usuarios) {
        const obj = this.Usuarios[i].id_usuario;
        const id = obj;
        if (this.Ids.length <= this.Usuarios.length) {
          this.Ids.push(id);
        }
      }
    }
  }
  
  DesleccionarTodo() {
    //console.log(this.Usuarios);
    console.log(this.Ids);

    if (this.checked === true) {
      this.checked = false;
      this.visible = true;
      this.QuitarFilas(this.Ids);
    }
  }

  AgregarFilas(ids: string): any {
    console.log(ids);
    
   this.Ids.push(ids);
   console.log(this.Ids);

    if (this.Ids.length >= 0) {
    }
    return {
      agregar: this.Ids,
    };
  }
  QuitarFilas(ids: any): void {
    
    
    this.Ids = this.Ids.filter((s) => s !== ids);
    console.log(this.Ids);

  }
  EliminarRegistros(){
    this.Ids.forEach(element => {
      
      this.usuariosService.EliminarUsuario(element).subscribe(
        (result:any)=>{
          console.log(result);
          
        }
      )
    });
   // location.reload();
   setTimeout(() => {
      
    location.reload()
  }, 2000);

  }

  Escuchar(event) {
    this.arregloUsuarios = event;
    this.arregloUsuarios.forEach((element) => {
      delete element.No;
    });

    this.UsuariosAdd = this.arregloUsuarios;

    //console.log(this.UsuariosAdd);

    this.UsuariosAdd.forEach((elemento) => {
      //console.log(elemento);

      this.usuariosService
        .InsertarUsuario(elemento)
        .subscribe(
          (resultado: any) => {
          console.log(resultado);
        },
        (error: any)=>{
         // console.log(error);

        }
        );
    });
    
    setTimeout(() => {
      
      location.reload()
    }, 2000);
  }
}
