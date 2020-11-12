import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/pages/authentication/login/login.component';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';

const appRoutes: Routes = [

  { path: '', component: LoginComponent },
  { path: '', redirectTo: 'login',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: LoginComponent }

];

// export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    
  ],
  imports: [    
    RouterModule.forRoot(appRoutes),
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
