import { Component, OnInit } from '@angular/core';
import { FactService } from "../fact.service";
import { DOMAnimator } from "../DOMAnimator";

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.css']
})
export class FactsComponent extends DOMAnimator implements OnInit {
  fact: any = "---";
  constructor(private factService: FactService) {super()}

  ngOnInit() {
  }

  refreshFact() {
    this.factService.fetchFact()
    .then(fact => this.fact = fact)
    .catch(() => this.fact = "I'm out of ideas sorry.");
  }

}
