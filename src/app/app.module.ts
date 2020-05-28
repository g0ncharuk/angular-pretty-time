import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrettyTimePipe } from './pretty-time.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PrettyTimePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
