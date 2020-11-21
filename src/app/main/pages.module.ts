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
import { utils } from 'protractor';

@NgModule({
  declarations: [
    MenuPrincipalComponent,
    LoginComponent,
    ForgotpasswordComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatRippleModule,
    FontAwesomeModule,
    MatCardModule,
    FlexLayoutModule,
    UtilsModule,
  ],
  exports: [MenuPrincipalComponent, LoginComponent, ForgotpasswordComponent],
})
export class PagesModule {}
