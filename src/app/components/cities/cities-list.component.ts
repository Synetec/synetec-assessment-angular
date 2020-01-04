import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesEndpoint } from '../../services/cities/cities-endpoint.service';

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css'],
    providers: [CitiesEndpoint]
})

export class CitiesListComponent implements OnInit{

    cities: ICity[];
    constructor(private citiesService: CitiesEndpoint) {}

    ngOnInit(): void {
        this.getCities()
    }

    getCities(): void {
        this.citiesService.getCities()
        .subscribe(cities => this.cities = cities);
      }
    
    delete(city: ICity): void {
        this.cities = this.cities.filter(h => h !== city);
        this.citiesService.deleteCities(city).subscribe();
      }
}
