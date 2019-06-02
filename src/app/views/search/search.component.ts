import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();
title: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const title = this.title;

    this.search.emit(title);
  }

}
