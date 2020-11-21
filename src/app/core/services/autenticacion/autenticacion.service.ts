import { HttpClient } from '@angular/common/http/index';
import { Injectable } from '@angular/core';
import { AppParametersService } from '../servicio-parametros/app-parameters.service';
import { Login } from '../../models/modelos-usuario/usuarioLoginmodel';
import { Observable } from 'rxjs';
interface Token {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(
    private http: HttpClient,
    private appParametersService: AppParametersService
  ) {}
  Autenticacion(login: Login): Observable<Token> {
    const header = this.appParametersService.vHeadersRequest;
    return this.http.post<Token>(  this.appParametersService.ApiServicesUrl + 'api/auth',
      login
    );
  }
}
