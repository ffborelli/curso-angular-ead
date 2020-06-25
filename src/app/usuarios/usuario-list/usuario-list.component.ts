import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  @Input()
  usuarioFilho : any;

  constructor() {

   }

  ngOnInit(): void {
    console.log ( this.usuarioFilho );
  }

}
