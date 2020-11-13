import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Output() EmitirEvento:EventEmitter<any> = new EventEmitter()
  titulopagina: string = 'Menu Principal';

  constructor() { }  
  ngOnInit(): void {
   
  }
 
  emitirEvento(){    
    this.EmitirEvento.emit({'titulo':this.titulopagina})
  }
  
  
}
