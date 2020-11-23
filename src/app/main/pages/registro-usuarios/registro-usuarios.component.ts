import { Component, OnInit } from '@angular/core';
import { NameService } from '../../../core/services/servicio-cambionombre/name.service';
import { UsuariosService } from '../../../core/services/servicio-usuarios/usuarios.service';
import { Usuario } from '../../../core/models/modelos-usuario/usuariomodel';

@Component({
  selector: 'registrousuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.scss']
})
export class RegistroUsuariosComponent implements OnInit {
  titulopagina: string = 'Registro de Usuarios';
  arregloUsuarios = [];
  ArregloRegistro: any[];
  UsuariosAdd: Usuario[];
  Columnas: any[];
  constructor(
    private titulo:NameService,
    private usuariosService:UsuariosService
  ) {
    this.titulo.titulopagina = this.titulopagina;
   }

  ngOnInit(): void {
    
  }
  // ngDoCheck(): void {
  //   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //   //Add 'implements DoCheck' to the class.
  //   console.log(this.arregloUsuarios);
    
  // }
  Escuchar(event){


    
    this.arregloUsuarios = event;
    this.ArregloRegistro = [];
    this.Columnas = [];


    // for (let index = 0; index < this.arregloUsuarios.length; index++) {
    //   const element = this.arregloUsuarios[index];
    //   element.shift();
    //   this.ArregloRegistro.push(element);
      
    // }

    // this.ArregloRegistro.forEach(element => {
    //   element.shift();
    //   this.Columnas.push(element)

      
    // });
    // let objetoUsuario = {
    //   Nombre:"",
    //   Apellidos

    // }

    // this.ArregloRegistro.forEach(elemento =>{
    //   elemento.forEach(posicion => {

        
    //   });
    // })

    // this.UsuariosAdd = [{Nombre = "mario"},{Nombre ="ari"}]

  

    // this.usuariosService.InsertarUsuario(usuario).subscribe(
    //   (resultado:any)=>{
    //     console.log();
        

    //   }
    //)
    //console.log(this.ArregloRegistro);
    


    
    

  }
  

}
