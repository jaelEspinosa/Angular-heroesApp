import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarComponent } from './agregar/agregar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HeroeComponent } from './heroe/heroe.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ListadoComponent } from './listado/listado.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [

     AgregarComponent,
     BuscarComponent,
     HeroeComponent,
     HomeComponent,
     ListadoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule

  ]
})
export class HeroesModule { }
