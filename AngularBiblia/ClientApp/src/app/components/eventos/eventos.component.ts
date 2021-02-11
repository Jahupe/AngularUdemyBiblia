import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;
  constructor() {
    this.mensaje = "";
  }

  ngOnInit() {
  }

  onClick($event) {
    console.log("El click llego aca", '' , $event)
  }

  onChange($event) {
    console.log($event.target.value);
  }

  onMouseEnter() {
    console.log("El Mouse entro");
    this.mensaje= "El mouse esta dentro del Div"
  }

  onMouseOut() {
    console.log("El Mouse Salio");
    this.mensaje = "El mouse esta fuera del Div"
  }


  onChangeInput($event) {
    console.log($event.target.value)
  }

  onInput($event) {
    console.log($event.target.value)
  }

  onFocus() {
    console.log("Obtuvo el foco")
  }

  onBlur() {
    console.log("Perdio el foco")
  }
}
