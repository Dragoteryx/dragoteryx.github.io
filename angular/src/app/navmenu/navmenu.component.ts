import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  websites = [
    {name: "Twitter", href: "https://twitter.com/Dragoteryx"},
    {name: "Github", href: "https://github.com/Dragoteryx"}
  ];
  locals = [];
  constructor() { }

  ngOnInit() {
  }

}
