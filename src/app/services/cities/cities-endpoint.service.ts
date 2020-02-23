import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CitiesEndpoint extends BaseService {

  private _getUrl: string = environment.apiBaseUrl;
    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }

    getCitiesUrl(){
      return this.getBaseUrl() + "api/Cities";
    }
    deleteCitiesUrl(){
      return this.getBaseUrl() + "api/Cities/delete-city/";
    }
}
