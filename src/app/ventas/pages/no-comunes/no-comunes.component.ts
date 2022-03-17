import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelectPipe
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPluralPipe
  clientes: string[] = ['Maria', 'Juan', 'Hernando', 'Eduardo', 'Felipe'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'juanico';
    this.genero = 'masculino';
  }
  borrarCliente(){
    this.clientes.pop();
  }

  //keyValuePipe
  persona = {
    nombre: 'Fernando',
    edad: 35, 
    direccion: 'Ottawa, Canadá'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //AsyncPipe
  miObservable = interval(1000); //este observable emite 0,1,2 cada 1000ms Con async se subscribe al observable.

  valorPromesa = new Promise(( resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500 );
  });

 
}
