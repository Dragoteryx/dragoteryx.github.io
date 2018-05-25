import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPulse]'
})
export class PulseDirective {
  pulsating = false;
  classes = ["animated", "pulse"];
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  @HostListener("mouseenter")
  mouseenter() {
    if (this.pulsating) return;
      this.pulsating = true;
    this.classes.forEach(classe => this.renderer.addClass(this.element.nativeElement, classe));
    setTimeout(() => {
      this.classes.forEach(classe => this.renderer.removeClass(this.element.nativeElement, classe));
      this.pulsating = false;
    }, 1000);
  }

}
