import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './main/pages/authentication/login/login.component';
import { MenuPrincipalComponent } from './main/pages/menuprincipal/menuprincipal.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegistroUsuariosComponent } from './main/pages/administrador/registro-usuarios/registro-usuarios.component';
import { RegistroMaestrosComponent } from './main/pages/administrador/registro-maestros/registro-maestros.component';
import { RegistroAlumnosComponent } from './main/pages/administrador/registro-alumnos/registro-alumnos.component';
import { CargasarchivosComponent } from './main/pages/usuario/cargasarchivos/cargasarchivos.component';
import { DescargasComponent } from './main/pages/usuario/descargas/descargas.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'menuprincipal',
    component: MenuPrincipalComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registrousuarios',
    component: RegistroUsuariosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registromaestros',
    component: RegistroMaestrosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'registroalumnos',
    component: RegistroAlumnosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'app-cargasarchivos',
    component: CargasarchivosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'app-descargas',
    component: DescargasComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: LoginComponent },
];

// export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
