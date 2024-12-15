import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorC]',
  standalone: true
})
export class ColorCDirective {

  constructor(private el: ElementRef) {this.rand() }

  private rand() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.changeColor(`rgb(${r}, ${g}, ${b})`)
  } 
  //  @Input() highlight1 : string; 

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }


}
