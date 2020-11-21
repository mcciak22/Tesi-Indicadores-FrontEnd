import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppParametersService } from '../servicio-parametros/app-parameters.service';
import { UsuariosModel, UsuarioModel } from '../../models/modelos-usuario/usuariosmodel';
import { Usuario } from '../../models/modelos-usuario/usuariomodel';
interface ResultOk{
  ok: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(
    private http: HttpClient,
    private appParametersService: AppParametersService
  ) {}
  ObtenerTodosLosUsuarios(): Observable<UsuariosModel> {
    return this.http.get<UsuariosModel>( this.appParametersService.ApiServicesUrl + 'api/usuarios');
  }
  ObtenerUsuarioPorId(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>( this.appParametersService.ApiServicesUrl + 'api/usuarios/' + id);
  }
  InsertarUsuario(usuario: Usuario): Observable<ResultOk> {
    const header = this.appParametersService.vHeadersRequest;

    return this.http.post<ResultOk>( this.appParametersService.ApiServicesUrl + 'api/usuarios', usuario, { headers: header} );
  }
  EliminarUsuario(id: number): Observable<any>{

    return this.http.delete<any>(this.appParametersService.ApiServicesUrl + id);
  }
  ActualizarrUsuario(id: number, usuario: Usuario): Observable<any>{

    return this.http.put<any>(this.appParametersService.ApiServicesUrl + id, usuario);
  }
}
