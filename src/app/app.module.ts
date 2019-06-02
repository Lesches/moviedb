import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './views/results/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsComponent } from './views/results/movies/movie-details/movie-details.component';
import { SearchComponent } from './views/search/search.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
