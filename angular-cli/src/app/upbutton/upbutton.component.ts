import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-upbutton',
  templateUrl: './upbutton.component.html',
  styleUrls: ['./upbutton.component.css']
})
export class UpbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTop() {
    $(window).scrollTop(0);
  }

}
