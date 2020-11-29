import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  url = "https://en.wikipedia.org/w/api.php";
  params = {
    action: "query",
    list: "search",
    srsearch: "",
    format: "json",
    origin: "*"
  };
  constructor(private http: HttpClient) {}

  public search(term: string) {
    this.params.srsearch = term;

    return this.http.get(this.url, {params: this.params})
  }
}
