import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

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
      return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon`);
    }

    getDetails(id: string){
      return this.http.get<Pokemon>(`${this.pokemonUrl}/pokemon/${id}`);
    }

    getDescription(url: string){
      return this.http.get<Pokemon>(`${url}`);
    }

}
