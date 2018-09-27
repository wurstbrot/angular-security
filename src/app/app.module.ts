import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BypassSecurityComponent } from './bypass-security.component';
import { InnerHtmlBindingComponent } from './inner-html-binding.component';
import { RefComponent} from './ref.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    BypassSecurityComponent,
    InnerHtmlBindingComponent,
    RefComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
