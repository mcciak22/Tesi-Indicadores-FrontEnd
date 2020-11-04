import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tesi-Indicadores'; 
  data: [][];
  data1=[];
  data2 =[];
  checked=false;
  Filas = [];
  rows=[];
  valuesgenerics: any[];
  ngOnInit(): void {
   
  }
  onFileChange(evt: any) {
    
    const target : DataTransfer =  <DataTransfer>(evt.target);
    
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  
    const reader: FileReader = new FileReader();
  
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
  
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
  
      const wsname : string = wb.SheetNames[0];
  
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  
      //console.log(ws);
  
      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      //console.log(this.data);        
      // let x = this.data.slice(0);
      // console.log(this.data1);
      for (let index = 0; index < 3; index++) {
        const element = this.data[index];
        if(element.length !== 0){
  
          this.data2.push(element)
        }
      }
  
      for (let index = 3; index < this.data.length; index++) {
        const element = this.data[index];
        if(element.length !== 0){
  
          this.data1.push(element)
        }
      }
    };   
    reader.readAsBinaryString(target.files[0]);   
    
  }
  CalculoSumaGenerica(){
   // console.log(this.Filas);
    
   let valuerow=[];
    this.Filas.forEach(element => {
     //console.log(element);
     let value= []
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
    console.log(this.valuesgenerics);
     
     
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
  Quitartodo(){
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

