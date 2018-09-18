import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 

    this.subscription = this.regresaObs()
      .subscribe( 
        numero => console.log("Subs ", numero), 
        error => console.log("Error en el Obs"),
        () => console.log("El observador Termino! ")
      );

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log("Proceso Detenido");
    
  }

  regresaObs(): Observable<any>{
    return new Observable( observer => {
      let contador = 0;
      let intervalo = setInterval( () => { 
        contador +=1;

        let salida = {
          valor: contador
        };

        observer.next(salida);
        // if(contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if(contador === 2){
        //   observer.error("Auxilio");
        // }
      }, 500);
    }).retry(2)

    // el metodo map recibe la respuesta que genera un observable
    //  lo puede convertir en cualquier tipo de archivo
    // haciendo uso de un objeto 
      .map((respuesta: any) => {
        return respuesta.valor;
      })
      .filter((valor, index) => {
        if ((valor % 2) === 1) {
          return true;
        }else{
          return false;
        }
      });

  }

}
