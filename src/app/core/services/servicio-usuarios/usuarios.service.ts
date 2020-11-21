import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppParametersService } from '../servicio-parametros/app-parameters.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient,
    private appParametersService: AppParametersService

  ) { }
  ObtenerTodosLosUsuarios(): Observable<any> {
    return this.http.get<any>(this.appParametersService.ApiServicesUrl + 'api/usuarios');
  }
}
