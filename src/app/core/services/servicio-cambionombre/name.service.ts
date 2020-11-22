import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  titulopagina: string = '';
  usuario: boolean = false;
  constructor() {}
}
