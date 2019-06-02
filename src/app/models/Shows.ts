// import {Episode} from './episode';
import * as _ from 'lodash';

export class Show {
  posterPath: string;
  adult: boolean;
  overview: string;
  date: string;
  genreIds: number[];
  id: number;
  originalTitle: string;
  originalLanguage: string;
  title: string;
  backdropPath: string;
  popularity: number;
  count: number;
  video: boolean;
  voteAvg: number
//  lastEp: Episode;
 // nextEp: Episode;
 //  lastEpLink: string;
 //  nextEpLink: string;
 // episodes: Episode[][];

  constructor(a?) {
    if (a) {
      this.posterPath = a.poster_path;
      this.adult = a.adult;
      this.overview = a.overview;
      this.date = a.release_date;
      this.genreIds = a.genre_ids;
      this.id = a.id;
      this.originalTitle = a.original_title;
      this.originalLanguage = a.original_language;
      this.title = a.title;
      this.backdropPath = a.backdrop_path;
      this.popularity = a.popularity;
      this.count = a.vote_count;
      this.video = a.video;
      this.voteAvg = a.vote_average;
   /*   if (a._links) {
        this.lastEpLink = (a._links.previousepisode) ? a._links.previousepisode.href : null;
        if (this.lastEpLink) {
          this.lastEpLink = 'https' + this.lastEpLink.substring(4);
        }
        this.nextEpLink = (a._links.nextepisode) ? a._links.nextepisode.href : null;
        if (this.nextEpLink) {
          this.nextEpLink = 'https' + this.nextEpLink.substring(4);
        }
      }*/
    }
  }

  /* Take an array of objects and sort them by season.
  addEpisodes(unsorted: Episode[]): void {
    this.episodes = [];
    const temp = _.groupBy(unsorted, (o) => o.season);
    _.forOwn(temp, (key, val) => {
      this.episodes.push(temp[val]);
    });

  }*/
}
