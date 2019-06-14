import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PokemonDashboardComponent } from './pokemon-dashboard/pokemon-dashboard.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon-dashboard', pathMatch: 'full' },
  { path: 'pokemon-dashboard', component: PokemonDashboardComponent },
  { path: 'pokemon-dashboard/page/:page', component: PokemonDashboardComponent },
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
