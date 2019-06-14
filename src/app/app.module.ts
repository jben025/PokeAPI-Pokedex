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
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonDashboardComponent,
    PokemonImageComponent,
    PokemonPageComponent,
    PokemonSearchComponent,
    SearchPipe
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
