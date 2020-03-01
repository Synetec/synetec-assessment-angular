import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import {_throw} from 'rxjs/observable/throw';
import { Observable } from "rxjs/Observable";
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import {ICity} from "../../models/city.model";
import * as _ from 'lodash';

@Injectable()
export class CitiesEndpoint extends BaseService {


    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    public getCities(): Observable<ICity[]> {
    let cities: ICity[] = [];
     return this._httpClient.get<ICity[]>( this.getBaseUrl() + 'cities', this.getRequestHeaders())
        .pipe( map(result=> _.values(result)),
          catchError(err => {
            console.log('Handling error locally and rethrowing it...', err);
            return _throw(err);
          })
        )
    }

}
