import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [] 
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtprogress: ElementRef;

  @Input('nombre') msj: string = 'Leyenda';
  @Input() porcentaje: number = 50; 

  @Output() cambiovalor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('leyenda', this.msj);
    // console.log('porcentaje', this.porcentaje);
   }

  ngOnInit() {
  }

onChange(newValue: number){

  // let elemHTML:any = document.getElementsByName('porcentaje')[0];
  // console.log(this.porcentaje);

  if(newValue >= 100){
    this.porcentaje = 100;
  }else if(newValue <=0 ){
    this.porcentaje = 0;
  }else{
    this.porcentaje = newValue;
  }

// elemHTML.value = this.porcentaje;
this.txtprogress.nativeElement.value = this.porcentaje;

  this.cambiovalor.emit(this.porcentaje);

}

cambiarValor(valor:number){
  
  if(this.porcentaje >= 100 && valor > 0){
    this.porcentaje=100;
    return
  }
  if(this.porcentaje <= 0 && valor < 0){
    this.porcentaje=0;
    return
  }
  this.porcentaje = this.porcentaje + valor;
  
  this.cambiovalor.emit(this.porcentaje);
  
  this.txtprogress.nativeElement.focus();
} 

}
