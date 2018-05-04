import { Directive, ElementRef, HostListener } from '@angular/core';
import * as $ from "jquery";

@Directive({
  selector: '[appTogglePulse]'
})
export class TogglePulseDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseenter") mouseenter() {
    this.togglePulse(this.el.nativeElement)
  }

  @HostListener("mouseleave") mouseleave() {
    this.togglePulse(this.el.nativeElement)
  }

  togglePulse(element) {
    if (element.pulsating === undefined) element.pulsating = false;
    if (element.pulsating)
      $(element).removeClass("animated pulse infinite");
    else
      $(element).addClass("animated pulse infinite");
    element.pulsating = !element.pulsating;
  }

}
