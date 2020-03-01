import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import {CitiesService} from "../../services/cities/cities.service";
import createSpyObj = jasmine.createSpyObj;
import {Observable} from "rxjs";
import {CitiesEndpoint} from "./cities-endpoint.service";
import {ICity} from "../../models/city.model";

describe('CitiesService', () => {

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

  let _citiesEndpoint = createSpyObj<CitiesEndpoint>('_citiesEndpoint', ['getCities']);
  let citiesService: CitiesService;
  _citiesEndpoint.getCities.and.returnValue(CITIES);

  beforeEach(async(() => {
    citiesService = new CitiesService(_citiesEndpoint);

  }));


  it('should create the cities list', async(() => {
    const citiesList = citiesService.getCities();
    expect(citiesList).toBeTruthy();
  }));

});
