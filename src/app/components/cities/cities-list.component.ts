import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService} from "../../services/cities/cities.service";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[];
    constructor(private _citiesService: CitiesService) {}

    ngOnInit(): void {
      this._citiesService.getCities().subscribe( response => {
        this.cities = response;
      });
    }

    deleteCity(index: number): void{
      this.cities.splice(index, 1);
    }
}
