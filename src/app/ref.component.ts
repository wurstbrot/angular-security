import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'ref',
  templateUrl: './ref.component.html',
})
export class RefComponent {
  constructor(private elementRef: ElementRef, private sanitizer: DomSanitizer) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.textContent = 'alert("Hello World via Angulars elementRef")';
    this.elementRef.nativeElement.appendChild(s);
  }
}
