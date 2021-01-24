import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit {
  public heroes: string[] = ['Spiderman', 'Thor', 'Hulk', 'Goku', 'Vegeta'];
  public heroeBorrado: string[];
  public ultimoHeroeBorrado: string[];

  constructor() {}

  ngOnInit(): void {}

  borrarHeroe(i: number): void {
    const heroeDeleted = this.heroes.splice(i, 1);
    this.heroeBorrado = heroeDeleted;
    this.ultimoHeroeBorrado = this.heroeBorrado;
  }

  borrarUltimoHeroe(): void {
    this.ultimoHeroeBorrado.pop();
  }
}
