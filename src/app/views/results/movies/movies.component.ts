import {Component, Input, OnInit} from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {Show} from '../../../models/Shows';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() term: string;
  shows: Show;
  query = 'Synecdoche+New+York';
  constructor(private moviedb: MoviedbService) {}

  // retrieves list of shows by search term and displays it
  ngOnInit() {
    this.moviedb.movieSearch(this.term).subscribe( results => {
      this.shows = results;
    });
  }
}
