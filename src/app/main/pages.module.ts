import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/authentication/login/login.component';
import { ForgotpasswordComponent } from './pages/authentication/forgotpassword/forgotpassword.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UtilsModule } from '../utils/utils.module';
import { MenuPrincipalComponent } from './pages/menuprincipal/menuprincipal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { RegistroUsuariosComponent } from './pages/administrador/registro-usuarios/registro-usuarios.component';
import { RegistroMaestrosComponent } from './pages/administrador/registro-maestros/registro-maestros.component';
import { RegistroAlumnosComponent } from './pages/administrador/registro-alumnos/registro-alumnos.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    MenuPrincipalComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegistroUsuariosComponent,
    RegistroMaestrosComponent,
    RegistroAlumnosComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRippleModule,
    FontAwesomeModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    RouterModule,
    UtilsModule,
  ],
  exports: [
    MenuPrincipalComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegistroUsuariosComponent,
    RegistroMaestrosComponent,
    RegistroAlumnosComponent,
  ],
})
export class PagesModule {}
