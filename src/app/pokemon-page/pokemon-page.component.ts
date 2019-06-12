import { Component, OnInit, Input } from '@angular/core';

import { Page } from '../page';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  @Input('page_count') count: number;
  @Input('curr_page') page: number;
  tmp_page: number;
  total_page: number;
  pageArray: [];

  constructor() { }

  ngOnInit() {
    console.log(this.count)
    this.tmp_page = (this.count / 50);

    if(this.tmp_page % 1 != 0){
      this.total_page = ((this.tmp_page - (this.tmp_page % 1)) + 1)
    }
    console.log(this.total_page)
    console.log(this.page)
  }

  createPagination(){
    for (var i=1; i<this.count; i++) {
      this.pageArray.push
    }
    console.log(this.pageArray)
  }

}
