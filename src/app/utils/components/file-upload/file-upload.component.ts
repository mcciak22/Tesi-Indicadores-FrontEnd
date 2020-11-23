import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ],
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements ControlValueAccessor {
  @Input() progress;
  onChange: Function;
  checked = false;

  data: [][];
  data1 = [];
  displayColums = [];
  
  Filas = [];
  rows = [];
  valuesgenerics: any[];
  suma: number;
  result: any[];
  tablafinal: any[];
  result2: any[];
  public file: File | null = null;
 
  @Input() visiblecolumns: number;
  @Input() visiblecolumnshead: number;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    //this.onChange(file);
    this.file = file;
    //console.log(this.visiblecolumns);
       
    
  }
  

  constructor( private host: ElementRef<HTMLInputElement> ) {
  }

  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  registerOnTouched( fn: Function ) {
  }


  onFileChange(evt: any) {

    const target: DataTransfer = <DataTransfer>(evt.target);

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      //console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      // pueden venir vacios los arreglos entonces hacemos el refactor de las columnas
      console.log(this.data);        
      // let x = this.data.slice(0);
      // console.log(this.data1);
      //obtenemos las columnas en los nombres
      for (let index = this.visiblecolumnshead; index <= this.visiblecolumnshead; index++) {
        const element = this.data[index];
        if (element.length !== 0) {

          this.displayColums.push(element)
        }
      }
       console.log(this.displayColums);
      

      for (let index = this.visiblecolumns; index < this.data.length; index++) {
        const element = this.data[index];
        if (element.length !== 0) {

          this.data1.push(element)
        }
      }
      console.log(this.data1);
      
    };
    reader.readAsBinaryString(target.files[0]);
// console.log(this.data1);
// console.log(this.data2);

  }
  CalculoSumaGenerica() {
    // console.log(this.Filas);

    let valuerow = [];
    this.Filas.forEach(element => {
      //console.log(element);
      let value = []
      for (let index = 2; index < element.length; index++) {
        const row = element[index];
        value.push(row)

      }
      //valuesgenerics.push(valuerow)
      valuerow.push(value);

    });
    this.valuesgenerics = valuerow;
    // this.valuesgenerics.forEach(element => {
    //   console.log(element);

    // });
    //this.valuesgenerics = this.valuesgenerics.shift();

    let numbersgeneris=[];
    this.valuesgenerics.forEach((element: any[]) => {
      element.shift();
      //console.log(element);
      let numbers=[]
      for (let index = 1; index < element.length; index += 2) {
        const element1 = element[index];
        numbers.push(element1);

      }
      numbersgeneris.push(numbers);
    });
    // this.suma=0;
    
   //console.log(numbersgeneris);
   this.result =[]
   numbersgeneris.forEach(element => {
      let total = element.reduce((a, b) => a + b, 0);
       this.result.push(total)     
   });
   this.result2=[]
   this.valuesgenerics.forEach(element => {
    let total = element.reduce((a, b) => a + b, 0);
     this.result2.push(total);
   });
  //  console.log(this.result);
  //  this.Filas.forEach(element => {
  //    element.total = this.result.forEach(element => {return element})
     
  //  });
  //console.log(this.valuesgenerics);
   
   this.tablafinal = [];


   for (let index = 0; index < this.Filas.length; index++) {
     const element1 = this.Filas[index];
     const element2 = this.result[index];
     const element3 = this.result2[index];
     element1.push('Sumativa generica'+' '+element2)
     element1.push('Sumativa'+' '+element3)
     
     //console.log(element2);
     
   }
   //console.log(this.Filas);
   
   
  // this.valuesgenerics.forEach(element=>{

  // })

    
    // console.log(total);
    
    

    
    

    //  for (let index = 1; index < valuesgenerics.length; index+=2) {
    //    const element = valuesgenerics[index];
    //    console.log(element);

    //  }
    //   console.log(valuesgenerics);

  }
  seleccionarTodo(): void {
    if (this.checked === false) {
      this.checked = true;
      for (const i in this.data1) {
        const obj = this.data1[i];
        const id = obj;
        if (this.Filas.length <= this.data1.length) {
          this.Filas.push(id);
        }
      }

    }
  }
  Quitartodo() {
    if (this.checked === true) {
      this.checked = false;
      this.quitar(this.Filas)
    }

  }

  agregar(ids: string): any {
    this.Filas.push(ids);

    if (this.Filas.length > 0) {

    }
    return {
      agregar: this.Filas
    };

  }
  quitar(ids): void {


    this.Filas = this.Filas.filter(s => s !== ids);
    console.log(this.Filas);

  }
  

}