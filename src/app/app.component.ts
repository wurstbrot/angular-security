import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Security</h1>
  <app-inner-html-binding></app-inner-html-binding>
  <app-bypass-security></app-bypass-security>
  <ref></ref>  
  `
})
export class AppComponent {
}

// 
//  