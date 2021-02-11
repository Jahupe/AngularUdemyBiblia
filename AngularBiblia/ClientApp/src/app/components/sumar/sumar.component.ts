import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  num1: number;
  num2: number;
  resultado : number;

  constructor() {
    this.num1 = 23;
    this.num2 = 43;
    this.resultado = 0;
  }

  ngOnInit() {
  }

  onClick() {
    this.resultado= this.num1 + this.num2 
  }

}
