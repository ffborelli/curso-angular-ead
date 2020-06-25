import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  nome = "Grande Porte";
  show  = true;

  // usuario = {
  //   id: 1,
  //   nome: 'Grande Porte',
  //   curso : {
  //     nome: 'Angular'
  //   }
  //  };

  usuario = {
    id: 1,
    nome: 'Grande Porte',
    curso : null
   };

  cursos = [ "Angular", "Cobol", "Java", "Lógica de Programação" ];

  constructor() { }

  mostrarMensagem(valor){
    this.nome = valor;
    //alert (valor);
  }

  ngOnInit(): void {
  }

  upperCase(){
    return this.usuario.curso?.nome.toUpperCase()  ?? 'Padrão';
  }

  novaIdade( novaIdadePai ){
    alert ( 'Nova idade: ' + novaIdadePai);
  }

}
