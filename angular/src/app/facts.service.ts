import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class FactsService {

  constructor(private http: Http) { }

  fetchFact() {
    return new Promise((resolve, reject) => {
      this.http.get("https://factgenerator.herokuapp.com/generate").subscribe(res => {
        resolve(res.json().fact);
      }, err => reject);
    });
  }

}
