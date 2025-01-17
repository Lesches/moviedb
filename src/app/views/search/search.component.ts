import {Component, OnInit} from '@angular/core';
import {MoviedbService} from '../../models/moviedb.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

title: string;
  constructor(private movieService: MoviedbService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // Will pass the search term to the results component
  async onSearch() {
    if (this.title) {

      this.movieService.movieSearch(
        this.route.snapshot.paramMap.get('query')
      ).subscribe(result => this.title = result);
    }
  }

}
