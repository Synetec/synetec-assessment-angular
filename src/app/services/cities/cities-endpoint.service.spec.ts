import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from '../../app.component';
import {CitiesService} from "../../services/cities/cities.service";
import createSpyObj = jasmine.createSpyObj;
import {Observable} from "rxjs";
import {CitiesEndpoint} from "./cities-endpoint.service";
import {HttpClient} from "@angular/common/http";
import {Injector} from "@angular/core";
import {ICity} from "../../models/city.model";

describe('CitiesEnpointService', () => {

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

  let _httpClient = createSpyObj<HttpClient>('_httpClient', ['get']);
  let _injector = createSpyObj<Injector>('_injector',['create']);

  let citiesEndPointService: CitiesEndpoint;
  _httpClient.get.and.returnValue(CITIES);
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CitiesEndpoint
      ]
    });
    citiesEndPointService = TestBed.get(CitiesEndpoint);
    httpMock = TestBed.get(HttpTestingController);

  }));


  it('should create the cities list', async(() => {
    citiesEndPointService.getCities()
      .subscribe(res => {
        expect(res).toEqual(
          [
            {id: 1, name: "New York", description: "NYC"},
            {id: 2, name: "New Orleans", description: "Orleans"}
          ]
        );
      });

    let cityRequest = httpMock.expectOne('https://my-json-server.typicode.com/mohammedanas/ccdadmin/cities');
    cityRequest.flush([
      {id: 1, name: "New York", description: "NYC"},
      {id: 2, name: "New Orleans", description: "Orleans"}
    ]);

  }));

});
