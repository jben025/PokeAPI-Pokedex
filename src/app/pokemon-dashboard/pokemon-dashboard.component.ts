//Angular  Resources
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  offset = 30;
  pokemon: Pokemon;
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
      this.getPokemonListPerPage(this.page, this.offset);
    }else{
      this.getPokemonList(this.offset);
    }

    });
    
  }

  getPokemonList(offset:number){
    this.pokemonService.getPokemons(offset)
    .subscribe((data: Pokemon) => console.log(this.pokemon = data))
  }

  getPokemonListPerPage(page: number, offset: number){
    this.pokemonService.getPokemonsPerPage(page, offset)
    .subscribe((data: Pokemon) => console.log(this.pokemon = data))
  }

}
