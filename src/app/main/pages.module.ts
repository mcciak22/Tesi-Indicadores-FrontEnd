import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { ForgotpasswordComponent } from './pages/authentication/forgotpassword/forgotpassword.component';




@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    LoginComponent,
    ForgotpasswordComponent
  ]
})
export class PagesModule { }
