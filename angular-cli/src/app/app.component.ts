import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { DOMAnimator } from "./DOMAnimator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends DOMAnimator implements OnInit {
  title = "Drago's Lair";

  constructor() {super()}

  ngOnInit() {
    $(document).ready(() => {
      this.adjust();
      this.setScrolling();
    });
  }

  adjust() {
    $("#content").css("margin-left", $("#leftmenu").css("width"));
  }

  setScrolling() {
    let scrollTop = $(window).scrollTop();
    let scrollBottom = scrollTop + $(window).height();
    if (scrollTop == 0)
      $("#upbutton").addClass("disabled");
    else
      $("#upbutton").removeClass("disabled");
    if (scrollTop > ($("#menu").offset().top + 50)) {
      $("#leftmenu").css("position", "fixed");
      $("#leftmenu").css("top", "0");
    } else {
      $("#leftmenu").css("position", "absolute");
      $("#leftmenu").css("top", "");
    }
  }

}
