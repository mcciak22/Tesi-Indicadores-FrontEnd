import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menuprincipal.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ]
})
export class MenuprincipalModule { }
