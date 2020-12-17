import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private wikipedia: WikipediaService
  ) {}

  results;

  fetchTerm(term: string) {
    this.wikipedia.search(term).subscribe( response => {
      this.results = response;
    });
  }
}
