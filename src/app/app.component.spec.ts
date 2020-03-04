import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ICity } from './models/city.model';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  @Component({
    selector: 'cities-list',
    template: '<div></div>'
  })
  class CitiesListComponent {
    cities: ICity[] = [];
    infoMessages = '';
    errorMessage = '';
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesListComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app component', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Synetec'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Synetec');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Synetec!');
  }));
});
