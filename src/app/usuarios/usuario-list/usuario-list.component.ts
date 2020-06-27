import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  idade : number = 0;

  @Output()
  meuNotificador = new EventEmitter();

  @Input()
  usuarioFilho : any;

  constructor( private usuarioService : UsuarioService  ) {
    //this.usuarioService = new UsuarioService();
  }

  ngOnInit(): void {
    console.log ( this.usuarioFilho );
    //this.usuarioService.mostrarMensagem();
  }

  addIdade(){
    this.idade++;
    this.meuNotificador.emit ( this.idade );
  }
  lessIdade(){
    this.idade--;

    if (this.idade < 0) this.idade = 0;

    this.meuNotificador.emit ( this.idade );
  }

}
