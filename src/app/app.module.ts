import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './diretivas/highlight.directive';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
