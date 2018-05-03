import { Injectable } from '@angular/core';
import * as $ from "jquery";

@Injectable()
export class FactService {

  constructor() { }

  fetchFact() {
    return new Promise((resolve, reject) => {
      $.getJSON("https://factgenerator.herokuapp.com/generate").done(res => {
        resolve(res.fact);
      }).fail(reject);
    });
  }

}
