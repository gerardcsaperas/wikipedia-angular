import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() output = new EventEmitter<string>();
  timeOut: any;
  constructor() { }

  ngOnInit(): void {
  }

  fetchTerm(term: string) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.output.emit(term);
    }, 300)
  }

}
