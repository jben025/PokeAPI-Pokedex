import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pokemon, PokemonDetails } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl = "https://pokeapi.co/api/v2";

  constructor(
    private http: HttpClient) { }

    pokemon: Pokemon;
    pokemonDetails: PokemonDetails;

    getAllPokemons(){
      return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon?offset=0&limit=999`);
    }

    getAllPokemonCount(offset: number){
      return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon?offset=0&limit=${offset}`);
    }

    getPokemons(offset:number): Observable<Pokemon>{
      return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon?offset=0&limit=${offset}`);
    }

    getPokemonsPerPage(page: number, offset: number): Observable<Pokemon>{
      return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon?offset=${(page-1)*offset}&limit=${offset}`);
    }

    getDetails(id: string){
      return this.http.get<PokemonDetails>(`${this.pokemonUrl}/pokemon/${id}`);
    }

}
