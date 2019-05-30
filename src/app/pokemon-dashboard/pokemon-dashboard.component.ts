//Angular  Resources
import { Component, OnInit } from '@angular/core';

//Modules


//Services
import { PokemonService } from '../pokemon.service';

//Class
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-dashboard',
  templateUrl: './pokemon-dashboard.component.html',
  styleUrls: ['./pokemon-dashboard.component.css']
})
export class PokemonDashboardComponent implements OnInit {

  pokemon: Pokemon;

  constructor(
    protected pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList(){
    this.pokemonService.getPokemons()
    .subscribe((data: Pokemon) => console.log(this.pokemon = data))
  }


}
