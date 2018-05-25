import { Component, OnInit } from '@angular/core';
import { FactsService } from "../facts.service";

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent implements OnInit {
  fact: any = "---";
  constructor(private factsService: FactsService) { }

  ngOnInit() {
  }

  refreshFact() {
    this.factsService.fetchFact()
    .then(fact => this.fact = fact)
    .catch(() => this.fact = "I'm out of ideas sorry.");
  }

}
