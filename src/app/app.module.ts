import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule } from './app-routing.module';
import { UtilsModule } from './utils/utils.module';
import { PagesModule } from './main/pages.module';
// const routes: Routes = [
//   { path: '**', component: FileUploadComponent }
//   ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,

    UtilsModule,
    PagesModule,
    AppRoutingModule
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
