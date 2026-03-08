import {  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2 } from '@angular/core';

  type RevealAnimation = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';

@Directive({
  selector: '[appReveal]'
})
export class RevealDirective implements AfterViewInit, OnDestroy{
@Input('appReveal') animation: RevealAnimation = 'fade-up';
  @Input() revealDelay: string = '0ms';

  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;

    this.renderer.addClass(element, 'reveal');
    this.renderer.addClass(element, this.getInitialClass());
    this.renderer.setStyle(element, 'transition-delay', this.revealDelay);

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'reveal-active');
          this.observer?.unobserve(element);
        }
      },
      { threshold: 0.15 }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private getInitialClass(): string {
    switch (this.animation) {
      case 'fade-left':
        return 'reveal-left';
      case 'fade-right':
        return 'reveal-right';
      case 'zoom-in':
        return 'reveal-zoom';
      case 'fade-up':
      default:
        return 'reveal-up';
    }
  }
}
