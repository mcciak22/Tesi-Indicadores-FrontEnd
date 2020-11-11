import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/pages/authentication/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadComponent } from './utils/components/file-upload/file-upload.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from "@angular/material/card";
import { ToolbarComponent } from './utils/components/toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './utils/components/card/card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FooterComponent } from './utils/components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// const routes: Routes = [
//   { path: '**', component: FileUploadComponent }
//   ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileUploadComponent, 
    ToolbarComponent, 
    CardComponent, 
    FooterComponent
  ],
  imports: [
    //RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
