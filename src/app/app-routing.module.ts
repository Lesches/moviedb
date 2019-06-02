import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './views/results/movies/movies.component';
import {MovieDetailsComponent} from './views/results/movies/movie-details/movie-details.component';
import {SearchComponent} from './views/search/search.component';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'search'},
  {path: 'search', component: SearchComponent},
  {path: 'results:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
