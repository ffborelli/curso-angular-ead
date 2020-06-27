import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsuarioListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [ UsuarioListComponent ]
})
export class UsuariosModule { }
