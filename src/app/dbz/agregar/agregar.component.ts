import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  // @Input() personajes: Personaje[] = [];
  // @Output() nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.addPersonaje(this.nuevo);
    // this.nuevoPersonaje.emit(this.nuevo);
    // this.personajes.push(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
    // console.log(this.personajes)
  }
}
