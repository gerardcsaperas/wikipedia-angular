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

  results: Object;

  async fetchTerm(term: string) {
    this.results = await this.wikipedia.search(term);
  }
}
