import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectItemComponent } from './select-item/select-item.component';
import { SelectListsComponent } from './select-lists/select-lists.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectItemComponent,
    SelectListsComponent,


  ],
  imports: [
    BrowserModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }