import { Component, OnInit } from '@angular/core';
import { DOMAnimator } from "../DOMAnimator";

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent extends DOMAnimator implements OnInit {
  websites = [
    {name: "Twitter", href: "https://twitter.com/Dragoteryx"},
    {name: "Github", href: "https://github.com/Dragoteryx"}
  ];
  locals = [];
  constructor() {super()}

  ngOnInit() {
  }

}
