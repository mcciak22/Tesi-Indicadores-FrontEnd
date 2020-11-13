import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { NameService } from 'src/app/core/_services/servicio-cambionombre/name.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  matcher = new MyErrorStateMatcher();
  centered = false;
  disabled = false;
  unbounded = false;
  tituloPagina: string = "Bienvenidos a la plataforma de Calculo de Indicadores Cacei"

  radius: number;
  color: string;
  constructor(  
    private _formBuilder: FormBuilder,
    private router: Router,
    private nameService:NameService

    ) 
    { 
      this.nameService.titulopagina = this.tituloPagina;

    }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
 
  InicioDeSesion(){
    this.router.navigate(['/menuprincipal'])
  }
  

}
