import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ICity } from '../../models/city.model';
import { HttpClient } from "@angular/common/http";
import { MessageService } from '../message.service';

@Injectable()
export class CitiesEndpoint extends BaseService {

    citiesEndpoint: string;
    constructor(private _httpClient: HttpClient, private _injector: Injector, private _messageService: MessageService) {
        super(_httpClient, _injector);
        this.citiesEndpoint = `${this.getBaseUrl()}api/cities`
    }

    getCities(): Observable<ICity[]> {
        return this._httpClient.get<ICity[]>(this.citiesEndpoint)
    }

    deleteCities(city: ICity | number): Observable<ICity> {
        const id = typeof city === 'number' ? city : city.id;
        const url = `${this.citiesEndpoint}/delete-city/${id}`;

        return this._httpClient.delete<ICity>(url, this.getRequestHeaders()).pipe();
    }

}
