import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  public nuevo: Personaje = {
    nombre: 'adrian',
    poder: 1000,
  };

//  public personajes: Personaje[] = [];

  constructor(private dbzService: DbzService) {
    // this.personajes = this.dbzService.personajes;
  }

  ngOnInit(): void {}

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevo(e: Personaje): void {
    // console.log(e);
    // this.personajes.push(e);
    // return true;
  // }
}
