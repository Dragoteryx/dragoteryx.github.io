import { Component, OnInit } from '@angular/core';
import { DOMAnimator } from "../DOMAnimator";

@Component({
  selector: 'app-unknown',
  templateUrl: './unknown.component.html',
  styleUrls: ['./unknown.component.css']
})
export class UnknownComponent extends DOMAnimator implements OnInit {

  constructor() {super()}

  ngOnInit() {
  }

}
