import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { MovieService } from './movie.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { DEFAULT_CONFIG, NgForageOptions, Driver } from 'ngforage';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    // One way of configuring ngForage
    {
      provide: DEFAULT_CONFIG,
      useValue: {
        name: 'MyApp',
        driver: [ // defaults to indexedDB -> webSQL -> localStorage
          Driver.INDEXED_DB,
          Driver.LOCAL_STORAGE
        ]
      } as NgForageOptions
    },
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
