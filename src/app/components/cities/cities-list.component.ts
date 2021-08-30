import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesEndpoint } from "../../services/cities/cities-endpoint.service";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[] = []
    constructor(private api: CitiesEndpoint) {}

    ngOnInit(): void {
        this.api.getCititesList().subscribe(cities => {
            this.cities = cities;
        })
    }

    deleteCity(cityId: number): void {
        this.api.deleteCity(cityId).subscribe(data => {
           this.cities = this.cities.filter(x => x.id !== cityId);
        },
        error => {
            console.log(error);
        })
    }
}