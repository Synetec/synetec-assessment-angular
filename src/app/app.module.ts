import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CitiesListComponent } from './components/cities/cities-list.component';
import { BaseService } from './services/base.service';
import { CitiesEndpoint } from './services/cities/cities-endpoint.service';
import { CitiesService } from './services/cities/cities.service';

const routes = [
  { path: '', component: CitiesListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
