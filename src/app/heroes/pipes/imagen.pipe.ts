import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'image'
})

export class imagePipe implements PipeTransform {
  transform(heroe: Heroe):string {

   if (!heroe.id ) return `assets/no-image.png`

   if (!heroe.alt_img){
     return `assets/heroes/${heroe.id}.jpg`
   }else{
     return heroe.alt_img!
   }

  }
}
