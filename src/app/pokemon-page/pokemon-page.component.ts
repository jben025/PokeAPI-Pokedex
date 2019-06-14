import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { isNumber } from 'util';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  @Input ('offset')offset: number;
  count: number;
  page: number;
  PrevPage = 0;
  NextPage = 10;
  sub: any;
  tmp_page: number;
  total_page: number;
  temp = 0;

  pokemon: Pokemon[];

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => { this.page = +params["page"];
  
      if (this.page < 1 || !this.page){
        this.page = 0
      }

      if(this.page > this.total_page){
        // Put error message
      }else{
        this.getPokemonCount(this.offset);
      }

    });
  }

  getPokemonCount(offset: number){
    this.pokemonService.getAllPokemonCount(offset)
    .subscribe((data: Pokemon) => this.countTotalPage(data.count, this.offset))
    
  }

  countTotalPage(pokeList: number, offset: number){
    this.tmp_page = (pokeList / offset);

    if(this.tmp_page % 1 != 0){
      this.total_page = ((this.tmp_page - (this.tmp_page % 1)) + 1)
    }
    console.log(this.total_page)
  }

  createPagination(){
    var ret = []

    for (var i = 1; i <= this.total_page; i++){
      ret.push(i)
    }
    return ret;
  }

  checkPagePrev(){
    
    this.PrevPage = this.page - 5

    if(this.PrevPage < 0){
      this.PrevPage = 0
    }

    if(this.PrevPage + 10 > this.total_page){
      this.PrevPage = this.total_page - 10
    }
    return this.PrevPage
    
  }

  checkNext(num: number){
    if(num == 0 ||num == 1 || num == NaN){
      this.page = 0
      return num
    }else{
      return num
    }
  }

  checkPageNext(){

    if(!this.page){
      this.NextPage = 10      
    }
    else{
      this.NextPage = this.page + 5
    }
    
    if(this.NextPage < 10){
      this.NextPage = 10
    }

    if(this.page+5 > this.total_page){
      this.NextPage = this.total_page
    }
    return this.NextPage
  }

  checkDisabled(num: number){
    status: String

    if(this.page == num){
      status = "disabled"
    }
    else{
      status=""
    }
    return status
  }

  checkDisabledPrev(num: number){
    status: String

    if(!this.page || this.page == 0 || this.page == 1){
      status = "disabled"
    }
    else{
      status = ""
    }
    return status
  }

  checkDisabledNext(num: number){
    status: String

    if(this.page == this.total_page){
      status = "disabled"
    }
    else{
      status = ""
    }
    return status
  }

}
