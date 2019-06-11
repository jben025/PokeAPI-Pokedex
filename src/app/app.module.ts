import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from './pokemon.service';
import { PokemonDashboardComponent } from './pokemon-dashboard/pokemon-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonImageComponent } from './pokemon-image/pokemon-image.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonDashboardComponent,
    PokemonImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
