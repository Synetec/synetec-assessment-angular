import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ICity } from "../../models/city.model";
import { AppConstants } from "../../shared/appconstants";
import { CitiesEndpoint } from "../../services/cities/cities-endpoint.service";
import { CitiesService } from "../../services/cities/cities.service";

@Component({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

    cities: ICity[] = [];
    infoMessages = '';
    errorMessage = '';
    constructor(private router: Router,
        private citiesService: CitiesService
    ) { }

    ngOnInit(): void {
        this.citiesService.getCities().subscribe({
            next: (data: ICity[]) => this.displayCities(data),
            error: err => this.errorMessage = err
        });
    }

    displayCities(cities: ICity[]): void {
        if (cities.length === 0) {
            this.infoMessages = AppConstants.noCities;
        } else {
            this.cities = cities;
        }
    }

    deleteCity(id: number): void {
        const confirmDelete = confirm(`Are you sure you wish to delete city ${id}?`);
        if (confirmDelete) {
            this.citiesService.deleteCity(id).subscribe({
                next: (data: void) => this.deleteComplete(id),
                error: err => this.errorMessage = err
            });
        }
    }

    deleteComplete(id: number): void {
        const index = this.cities.findIndex(c => c.id === id);
        this.cities.splice(index, 1);
        this.router.navigate(['/']);
    }
}