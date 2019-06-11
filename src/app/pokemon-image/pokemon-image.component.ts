import { Component, OnInit, Input } from '@angular/core';

import { PokemonService } from "../pokemon.service";
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.css']
})
export class PokemonImageComponent implements OnInit {

  pokemon: Pokemon;
  @Input('pokemon') pokemon_name: string;

  constructor(
    protected pokemonService: PokemonService
  ) { }

  ngOnInit() {
    console.log("Name: "+ this.pokemon_name)
    this.getPokemonSprite(this.pokemon_name)
  }

  getPokemonSprite(name: string){
    this.pokemonService.getDetails(name)
    .subscribe((data: Pokemon) => this.pokemon = data)
  }

}
