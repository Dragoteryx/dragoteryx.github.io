import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPulseToggle]'
})
export class PulseToggleDirective {
  pulsating = false;
  classes = ["animated", "pulse", "infinite"];
  constructor(private renderer: Renderer2, private element: ElementRef) { }

  @HostListener("mouseenter")
  mouseenter() {
    this.togglePulse();
  }

  @HostListener("mouseleave")
  mouseleave() {
    this.togglePulse();
  }

  private togglePulse() {
    if (this.pulsating) this.classes.forEach(classe => this.renderer.removeClass(this.element.nativeElement, classe));
    else this.classes.forEach(classe => this.renderer.addClass(this.element.nativeElement, classe));
    this.pulsating = !this.pulsating;
  }

}
