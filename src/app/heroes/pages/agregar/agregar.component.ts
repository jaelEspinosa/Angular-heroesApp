import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles:[
    `
    .form{
      margin-top:10vh;
    }
    `

  ]
})
export class AgregarComponent implements OnInit {

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(({ id })=> this.id = id)

  if (this.id){
    this.heroesService.getHeroe( this.id )
    .subscribe(heroe => {
      this.heroe = heroe
    })
    }

  }


  constructor (private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router
               ){}

  publishers = [
    {
      id:'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]
heroe: Heroe = {
  superhero: '',
  alter_ego: '',
  characters: '',
  first_appearance: '',
  publisher: Publisher.DCComics,
  alt_img:''
}

id: string = ''
saved: boolean = false;

guardar() {
  if (this.heroe.superhero.trim().length === 0) return;
  if (this.heroe.first_appearance.trim().length === 0) return;
  if (this.heroe.alter_ego.trim().length === 0) return;
  if (this.heroe.characters.trim().length === 0) return;
  if (this.heroe.alter_ego.trim().length === 0) return;
  const validUrl =     /^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/
  if (this.heroe.alt_img){
    if(validUrl.test(this.heroe.alt_img)) return
  }

if(!this.id){
  this.heroesService.agregarHeroe( this.heroe ).subscribe(heroe => this.heroe = heroe)
  this.saved = true
}else{
 this.heroesService.editarHeroe( this.heroe, this.id ).subscribe(heroe => this.heroe = heroe)
 this.saved = true
}
setTimeout(() => {
  this.saved=false
  this.router.navigate([`/heroes/${this.heroe.id}`])
}, 2500);
}

}
