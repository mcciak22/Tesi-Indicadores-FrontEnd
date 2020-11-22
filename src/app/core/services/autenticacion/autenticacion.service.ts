
import { Injectable } from '@angular/core';
import { AppParametersService } from '../servicio-parametros/app-parameters.service';
import { Login } from '../../models/modelos-usuario/usuarioLoginmodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import jwt_decode from 'jwt-decode';
import { Usuario } from '../../models/modelos-usuario/usuariomodel';
import { UsuarioSession } from '../../models/modelos-usuario/usuarioSessionmodel';


interface Token{
  ok: boolean;
  Token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  sessioUser: UsuarioSession
  constructor(
    private http: HttpClient,
    private appParametersService: AppParametersService
  ) {}
   Autenticacion(login: Login): Observable<Token> {
     const header = this.appParametersService.vHeadersRequest;
     //console.log(login);
     
      return this.http.post<Token>(this.appParametersService.ApiServicesUrl + 'api/auth',
        login,
        {headers: header}       
      );
   }
   // Metodo de establecer session
  setSession(authResult: string): void {
    // Almacena el nombre de usuario y el token jwt en el almacenamiento local para mantener al usuario conectado entre actualizaciones de página
 
    this.sessioUser = jwt_decode(authResult)
    console.log(this.sessioUser);
    
    // Expira en segundos
     const expiresAt = moment().add(authResult, 'second');
     localStorage.setItem('Usuario', JSON.stringify({Id: this.sessioUser.id, NombreCompleto: this.sessioUser.Nombre + ' ' + this.sessioUser.Apellidos, 
     Email: this.sessioUser.Email, Rol: this.sessioUser.Rol, Exp: this.sessioUser.exp, Iat:this.sessioUser.iat }));
     localStorage.setItem('Token', authResult);
     localStorage.setItem('Expiracion', JSON.stringify(expiresAt.valueOf()));
    
  }
  // Metodo cerrar sesion 
  public logout(): void {
    // Elimina los elementos del almacenamiento local con el nombre de su llave
    localStorage.removeItem('Usuario');
    localStorage.removeItem('Token');
    localStorage.removeItem('Expiracion');
 
  }
  // Metodo esta conectado
  public isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }
  // Metodo est� desconectado
  isLoggedOut(): boolean {
    // Retorna el metodo conectado negado
    return !this.isLoggedIn();
  }
  // Metodo regresa la expiracion 
  getExpiration(): object {
    const expiration = localStorage.getItem('Expiracion');
    const expiresAt = JSON.parse(expiration);
    // console.log(typeof (moment(expiresAt)));
    return moment(expiresAt);
  }
}
