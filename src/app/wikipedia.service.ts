import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  url = "https://en.wikipedia.org/w/api.php";
  params = {
    action: "query",
    list: "search",
    srsearch: "",
    format: "json"
  };

  public search(term: string): Object {
    this.params.srsearch = term;
    this.url += "?origin=*";
    Object.keys(this.params).forEach( key => {this.url += "&" + key + "=" + this.params[key]});

    return fetch(this.url)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log(err));
  }
}
