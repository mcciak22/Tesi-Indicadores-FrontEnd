import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
interface Mensaje {
  mensajemenu: string;
  mensajecontenido: string;
}

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss'],
})
export class MatDialogComponent implements OnInit {
  MensajeMenu: string = '';
  MensajeContenido: string = '';
  constructor(
    public dialogRef: MatDialogRef<MatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Mensaje
  ) {
    
    
     this.MensajeMenu = this.data.mensajemenu
    
     
     this.MensajeContenido = this.data.mensajecontenido
  }

  ngOnInit(): void {

    
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
