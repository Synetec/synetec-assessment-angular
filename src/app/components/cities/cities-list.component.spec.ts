import { Component } from '@angular/core';
import { CitiesEndpoint } from './../../services/cities/cities-endpoint.service';
import { CitiesService } from './../../services/cities/cities.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { CitiesListComponent } from './cities-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('CitiesListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesListComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      providers:[
        CitiesService,
        CitiesEndpoint
      ]
    }).compileComponents();
  }));

  it('should create the cities list component', async(() => {
    const fixture = TestBed.createComponent(CitiesListComponent);
    const citiesList = fixture.debugElement.componentInstance;
    expect(citiesList).toBeTruthy();
  }));

});
