import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  nome = "Grande Porte";

  constructor() { }

  mostrarMensagem(valor){
    this.nome = valor;
    //alert (valor);
  }

  ngOnInit(): void {
  }

}
