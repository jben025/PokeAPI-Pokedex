import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

import { Pokemon } from '../pokemon';
 
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  pokemon: Pokemon[];

  constructor( 
    public messageService: MessageService ) { }

  ngOnInit() {
    this.messageService.add('PokemonService: Started');
  }

}
