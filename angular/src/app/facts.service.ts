import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class FactsService {

  constructor(private http: Http) { }

  fetchFact(options = {}) {
    let url = "https://factgenerator.herokuapp.com/generate?";
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(res => {
        resolve(res.json().facts[0].text);
      }, err => reject);
    });
  }

}
