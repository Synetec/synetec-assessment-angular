import { ICity } from './../../models/city.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CitiesService {

   constructor(private _citiesEndpoint: CitiesEndpoint, private _httpClient: HttpClient) {}

    getCities(): Observable<any>{
      return this._httpClient.get(this._citiesEndpoint.getCitiesUrl() );
    }

    deleteCity (city: ICity): Observable<any> {
      return this._httpClient.delete(this._citiesEndpoint.deleteCitiesUrl() + city.id);
    }
}

