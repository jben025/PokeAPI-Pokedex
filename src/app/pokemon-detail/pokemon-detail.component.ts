import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '../pokemon.service';

import { PokemonDetails } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

pokemon: PokemonDetails;
details: any;
sub: any;
id: string;
default_sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png";

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.id = params["id"]; // (+) converts string 'id' to a number
    this.getPokemonDetail(this.id);
   });
  }

  getPokemonDetail(id: string){
    this.pokemonService.getDetails(id)
    .subscribe((data: PokemonDetails) => console.log(this.pokemon = data))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
