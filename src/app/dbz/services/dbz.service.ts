import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

// @Injectable({
//     // providedIn: 'root'
// })
@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 20000 },
    { nombre: 'Vegeta', poder: 15000 },
  ];

  get personajes(): Personaje[] {
    //  todos los objetos en js son pasados por referencia y
    // tslint:disable-next-line: max-line-length
    return [...this._personajes]; // evitar romper la relacion, ...separa cada uno de los elementos independientes que tenga el arreglo y crea uno nuevo (esto rompe la referencia con el arreglo original)
  }
  constructor() {
    // console.log('Servicio inicializado');
  }

  addPersonaje(personaje: Personaje): void {
    this._personajes.push(personaje);
  }
}
