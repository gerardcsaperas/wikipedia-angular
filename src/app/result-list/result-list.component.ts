import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
  wikipediaUrl: string = "https://en.wikipedia.org?curid="
  @Input() results;
  constructor() { }

  ngOnInit(): void {
  }

}
