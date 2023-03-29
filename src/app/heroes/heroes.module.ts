import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { imagePipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
      //components
     AgregarComponent,
     BuscarComponent,
     HeroeComponent,
     HomeComponent,
     ListadoComponent,
     HeroeCardComponent,

     //pipes
     imagePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,


  ]
})
export class HeroesModule { }
