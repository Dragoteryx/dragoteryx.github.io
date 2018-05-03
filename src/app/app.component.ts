import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

function adjust() {
  $("#content").css("margin-left", $("#leftmenu").css("width"));
}

function setScrolling() {
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Drago's Lair";

  ngOnInit() {
    $(document).ready(function() {
      adjust();
      setScrolling();
      $(window).resize(adjust);
      $(window).scroll(setScrolling);
      $(".button, .cadre").mouseenter(function() {
        $(this).addClass("animated pulse");
      });
      $(".button, .cadre").mouseleave(function() {
        $(this).removeClass("animated pulse");
      });
    });
  }

}
