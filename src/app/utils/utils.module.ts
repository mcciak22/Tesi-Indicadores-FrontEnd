import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [
    CardComponent,
    FileUploadComponent,
    FooterComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    FileUploadComponent,
    FooterComponent,
    ToolbarComponent
  ]
})
export class UtilsModule { }
