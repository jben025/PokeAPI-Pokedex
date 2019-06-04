//Angular  Resources
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  pokemonList: any;
  sub: any;
  page = 0;

  constructor(
    protected pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.page = +params["page"]; // (+) converts string 'id' to a number
    console.log("page: " + this.page)
    
    if (this.page >= 1){
      this.getPokemonListPerPage();
    }else{
      this.getPokemonList();
    }
    
    });
  }

  getPokemonList(){
    this.pokemonService.getPokemons()
    .subscribe((data: Pokemon) => console.log(this.pokemon = {
      count: data['count'],
      next: data['next'],
      results: data['results']
    }))
  }

  getPokemonListPerPage(){
    this.pokemonService.getPokemonsPerPage(this.page)
    .subscribe((data: Pokemon) => console.log(this.pokemon = data))
  }


}
