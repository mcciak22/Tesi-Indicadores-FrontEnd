import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/pages/authentication/login/login.component';
import { ForgotpasswordComponent } from './main/pages/authentication/forgotpassword/forgotpassword.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent }

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
