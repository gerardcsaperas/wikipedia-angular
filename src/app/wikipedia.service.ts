import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

interface WikipediaResponse {

}

const observable = new Observable<WikipediaResponse>((observer) => {
  observer.next(1)
})

observable.subscribe((value) => {
  console.log(value);
});

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
      .pipe(
        pluck('query', 'search')
      )
  }
}
