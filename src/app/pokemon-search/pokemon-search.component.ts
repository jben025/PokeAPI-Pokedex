import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon, PokemonDetails, Array } from '../pokemon';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  @Input('offset') offset: number;
  pokemon: Pokemon;
  pokemonDetails: PokemonDetails;
  pokeTable = [];
  searchTable = [];
  default_sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png";

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.searchPokemons()
  }

  searchPokemons(){
    this.pokemonService.getAllPokemons()
    .subscribe((data: Pokemon) => this.getPokemonDetails(data.results,data.count))
  }

  getPokemonDetails(dataArray: Array, total_pokemon:number){

    var pokeName;

    for (var i = 0; i < total_pokemon; i++){

      pokeName = dataArray[i].name;
      this.pokemonService.getDetails(pokeName)
      .subscribe((data: PokemonDetails) => (this.savePokemonToTable(data.name,data.id,data.sprites.front_default)))
    }

  }

  savePokemonToTable(name: string, id: number, sprite: string){
    
    var tempTable = []

    tempTable.push(name,id,sprite)
    this.pokeTable.push(tempTable)
  }

  checkPokeTable(str: string){
  
    var tempTable = []

    if (str == ""){
      this.searchTable = []
    }else{
      for(var i = 0; i < this.pokeTable.length; i++){
        if(this.pokeTable[i][0].includes(str)){
          console.log("input: " + str)
          tempTable.push(this.pokeTable[i])
          }
        this.searchTable = tempTable
      }
    }

    console.table(this.searchTable)

  }

}
