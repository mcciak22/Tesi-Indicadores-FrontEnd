import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NameService } from 'src/app/core/_services/servicio-cambionombre/name.service';

@Component({
  selector: 'menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {
  @Output() EmitirEvento: EventEmitter<any> = new EventEmitter();
  titulopagina = 'Menu Principal';

  constructor(public nameService: NameService) {
    this.nameService.titulopagina = this.titulopagina;
  }
  ngOnInit(): void {}
}
