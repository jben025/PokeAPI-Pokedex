import { Component, OnInit, Input } from '@angular/core';

import { PokemonService } from "../pokemon.service";
import { Pokemon, PokemonDetails } from '../pokemon';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.css']
})
export class PokemonImageComponent implements OnInit {

  pokemon: PokemonDetails;
  @Input('pokemon') pokemon_name: string;
  default_sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png";

  constructor(
    protected pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.getPokemonSprite(this.pokemon_name)
  }

  getPokemonSprite(name: string){
    this.pokemonService.getDetails(name)
    .subscribe((data: PokemonDetails) => this.pokemon = data)
  }

}
