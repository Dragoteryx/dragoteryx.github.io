import { Directive, ElementRef, HostListener } from '@angular/core';
import * as $ from "jquery";

@Directive({
  selector: '[appPulse]'
})
export class PulseDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") mouseenter() {
    this.pulse(this.el.nativeElement)
  }

  pulse(element) {
    if (element.pulsating) return;
      element.pulsating = true;
    $(element).addClass("animated pulse");
    setTimeout(() => {
      $(element).removeClass("animated pulse");
      element.pulsating = false;
    }, 750);
  }

}
