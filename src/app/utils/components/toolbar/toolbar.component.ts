import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  //icons svg for fontawesone
 
   valorevnto:string = '';
  faCoffee = faCoffee;
  titulopagina="Bienvenidos a la plataforma de Calculo de Indicadores Cacei"
  constructor() { }

  ngOnInit(): void {
        
  }
  verEvento(evento){
    this.valorevnto = evento;
    

  }
  changeFn($event){
    console.log($event);
    
  }


}
