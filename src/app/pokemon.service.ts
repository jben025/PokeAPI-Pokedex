import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pokemon } from './pokemon';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl = "https://pokeapi.co/api/v2";

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    pokemon: Pokemon;

    private log( message: string ){
      this.messageService.add(`PokemonService: ${message}`);
      }
  
    getPokemons(){
      return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon?offset=0&limit=50`);
    }

    getPokemonsPerPage(page: number){
      return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon?offset=${(page-1)*50}&limit=50`);
    }

    getDetails(id: string){
      return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon/${id}`);
    }

}
