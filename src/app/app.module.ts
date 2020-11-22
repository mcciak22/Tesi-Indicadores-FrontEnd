import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { UtilsModule } from './utils/utils.module';
import { PagesModule } from './main/pages.module';
import { UsuariosService } from './core/services/servicio-usuarios/usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

// const routes: Routes = [
//   { path: '**', component: FileUploadComponent }
//   ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    // RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    UtilsModule,
    PagesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
