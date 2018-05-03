import * as $ from "jquery";

export class DOMAnimator {

  constructor() { }

  pulse(event) {
    if (event.target.pulsating) return;
      event.target.pulsating = true;
    $(event.target).addClass("animated pulse");
    setTimeout(() => {
      $(event.target).removeClass("animated pulse");
      event.target.pulsating = false;
    }, 750);
  }

  pulseToggle(event) {
    if (event.target.pulsating === undefined) event.target.pulsating = false;
    if (event.target.pulsating)
      $(event.target).removeClass("animated pulse infinite");
    else
      $(event.target).addClass("animated pulse infinite");
    event.target.pulsating = !event.target.pulsating;
  }

}
