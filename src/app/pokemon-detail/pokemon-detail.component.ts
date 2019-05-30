import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { PokemonService } from '../pokemon.service';

import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

pokemon: Pokemon;
details: any;
sub: any;
id: string;
desc_url = "https://pokeapi.co/api/v2/pokemon-form/15/";

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.id = params["id"]; // (+) converts string 'id' to a number
    this.getPokemonDetail();
   });
  }

  getPokemonDetail(){
    this.pokemonService.getDetails(this.id)
    .pipe(
    //    switchMap(any => this.pokemonService.getDescription(this.desc_url))
    //    .subscribe((data: any) => console.log(this.details = data))
    )
    .subscribe((data: Pokemon) => console.log(this.pokemon = data))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
