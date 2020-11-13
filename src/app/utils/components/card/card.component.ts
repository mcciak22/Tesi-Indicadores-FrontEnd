import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  //el input se puede para que la etiqueta de app-card se reciban propiedades. recibir datos desde otros componentes.
  @Input() urlImage: string = '';
  constructor() { }

  ngOnInit(): void {
    
  }

}
