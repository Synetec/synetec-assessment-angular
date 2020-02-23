import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";
import { Observable } from "rxjs/Observable";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: Observable<ICity[]>;
    constructor(private citiesService: CitiesService) {}

    ngOnInit(): void {
      this.cities = this.citiesService.getCities();
    }

    deleteCity(city :ICity)
    {
      this.citiesService.deleteCity(city).subscribe(data=>
        this.cities = this.citiesService.getCities()
      );
    }
}
