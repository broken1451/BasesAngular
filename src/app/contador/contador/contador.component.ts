import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(+base)">+ {{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador app';
  public numero: number = 10;
  public base: number = 5;
  constructor() {}

  aumentar(): void {
    this.numero = this.numero + 1;
  }

  decrementar(): void {
    this.numero = this.numero - 1;
  }

  acumular(numero: number): void {
    if (numero === this.base) {
      this.numero = this.numero + this.base;
    } else {
      this.numero = this.numero - this.base;
    }
    // this.numero += numero;
  }
}
