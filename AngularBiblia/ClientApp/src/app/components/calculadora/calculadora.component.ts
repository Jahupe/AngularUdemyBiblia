import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado: string;
  calculoFinalizado: boolean;

  constructor() {
    this.resultado = "";
  }

  ngOnInit() {
  }

  onClick($event) {
    if (this.calculoFinalizado) {
      this.resultado = $event.target.innerText;
      this.calculoFinalizado = false;
    } else {
      this.resultado += $event.target.innerText;
      console.log($event.target.innerText)
    }

  }

  onResultado() {
    this.resultado = eval(this.resultado);
    this.calculoFinalizado= true
  }

}
