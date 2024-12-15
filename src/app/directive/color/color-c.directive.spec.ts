import { ElementRef } from '@angular/core';
import { ColorCDirective } from './color-c.directive';

describe('ColorCDirective', () => {
  it('should create an instance', () => {
    const directive = new ColorCDirective(new ElementRef(5));
    expect(directive).toBeTruthy();
  });
});
