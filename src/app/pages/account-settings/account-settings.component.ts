import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
// Con estas instrucciones del constructor, se hace referencia a un servicio
  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    // en esta parte se ponen todo lo que se quiera ejecutar cuando la pagina se cargue
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    
    this.aplicarCheck( link );

    this._ajustes.aplicarTema( tema );

  }

// este metodo sirve para checar que elemento esta seleccionado mediante la clase de elemento y asi remover 
// la clase working de otro elemento para colocarla solo en elemento seleccionado
  aplicarCheck(link: any){
    let selectores: any = document.getElementsByClassName('selector');
    for( let ref of selectores){
       ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for( let ref of selectores){ 
      if(ref.getAttribute('data-theme') == tema ){
        ref.classList.add('working');
        break;
      }
   }
  }

}
