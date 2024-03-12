import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectItemComponent } from './select-item/select-item.component';


@NgModule({
  declarations: [AppComponent, SelectItemComponent],
  imports: [BrowserModule, NgSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
