import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/pages/dashboard/dashboard.component';

const appRoutes: Routes = [

  { path: '', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard',pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: DashboardComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

// @NgModule({
//   declarations: [DashboardComponent],
//   imports: [    
//     RouterModule.forRoot(appRoutes),
//   ], 
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
