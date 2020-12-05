import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { BalsportPipe } from './balsport.pipe';
import {SportService} from './sport.service'


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    BalsportPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [SportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
