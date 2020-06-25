import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  @Input()
  usuarios = [
    { id : 0, nome : 'Usuário 0'},
    { id : 1, nome : 'Usuário 1'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
