import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  //  @Input('data') personajes: any[];
  //  @Input() personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}
}
