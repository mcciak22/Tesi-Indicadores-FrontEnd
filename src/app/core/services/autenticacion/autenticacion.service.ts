
import { Injectable } from '@angular/core';
import { AppParametersService } from '../servicio-parametros/app-parameters.service';
import { Login } from '../../models/modelos-usuario/usuarioLoginmodel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Token{
  Token:string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(
    private http: HttpClient,
    private appParametersService: AppParametersService
  ) {}
   Autenticacion(login: Login): Observable<any> {
     const header = this.appParametersService.vHeadersRequest;
     console.log(login);
     
      return this.http.post<any>(this.appParametersService.ApiServicesUrl + 'api/auth',
        login,
        {headers: header}       
      );
   }
}
