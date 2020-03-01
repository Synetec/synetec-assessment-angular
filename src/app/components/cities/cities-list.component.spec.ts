import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { CitiesListComponent } from './cities-list.component';
import {CitiesService} from "../../services/cities/cities.service";
import createSpyObj = jasmine.createSpyObj;
import {Observable} from "rxjs";
import {ICity} from "../../models/city.model";

describe('CitiesListComponent', () => {

   const CITIES_ARRAY: ICity[] = [
     {
       id:1,
       name: "London",
       description: "Capital city"
     },
     {
       id:2,
       name: "Reading",
       description: "Capital Of Thames Valley"
     }
   ];

   const CITIES: Observable<ICity[]> = Observable.of(CITIES_ARRAY);

  let _citiesService = createSpyObj<CitiesService>('_citiesService', ['getCities']);

   _citiesService.getCities.and.returnValue(CITIES);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesListComponent
      ],
      providers: [
        { provide: CitiesService, useValue: _citiesService }
      ]
    }).compileComponents();
  }));
  
  it('should create the cities list component', async(() => {
    const fixture = TestBed.createComponent(CitiesListComponent);
    const citiesList = fixture.debugElement.componentInstance;
    expect(citiesList).toBeTruthy();
  }));

  it('should fetch the cities list', async(() => {
    const fixture = TestBed.createComponent(CitiesListComponent);
    const citiesList = fixture.debugElement.componentInstance;
    citiesList.ngOnInit();
    expect(citiesList.cities.length).toBe(2);
    expect(citiesList.cities[0].name).toEqual("London");
    expect(citiesList.cities[1].name).toEqual("Reading");
  }));

  it('should delete the chosen cities', async(() => {
    const fixture = TestBed.createComponent(CitiesListComponent);
    const citiesList = fixture.debugElement.componentInstance;
    citiesList.ngOnInit();
    expect(citiesList.cities.length).toBe(2);
    citiesList.deleteCity(0);
    expect(citiesList.cities.length).toBe(1);
    citiesList.deleteCity(0);
    expect(citiesList.cities.length).toBe(0);
  }));

});
