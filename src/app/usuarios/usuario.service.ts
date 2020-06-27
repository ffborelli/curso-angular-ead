import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) { }

  mostrarMensagem(){
    alert('Usuário Serviço');
  }

  getAll(){
    return this.http.get ('https://reqres.in/api/users');
  }
}
