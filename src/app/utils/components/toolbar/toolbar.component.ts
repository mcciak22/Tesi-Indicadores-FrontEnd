import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NameService } from 'src/app/core/_services/servicio-cambionombre/name.service';




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
  constructor(
    public nameService:NameService
  )
  {

    this.nameService.titulopagina = this.titulopagina;


  }

  ngOnInit(): void {
        
  }
  

}
