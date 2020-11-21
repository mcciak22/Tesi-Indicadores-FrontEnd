import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppParametersService {
  readonly ApiServicesUrl: string = environment.api;
  readonly vHeadersRequest = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  readonly vHeadersRequestexe = new HttpHeaders({
    'Content-Type': 'application/octet-stream',
  });
  constructor() {}
}
