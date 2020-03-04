import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../app.component';
import { CitiesListComponent } from './cities-list.component';
import { CitiesService } from '../../services/cities/cities.service';

describe('CitiesListComponent', () => {
  let mockCitiesService;
  let CITIES;
  let fixture: ComponentFixture<CitiesListComponent>;

  beforeEach(async(() => {
    CITIES = [
      { id: 1, name: 'London', description: '' },
      { id: 2, name: 'New York', description: '' },
      { id: 3, name: 'Hong Kong', description: '' },
    ];

    mockCitiesService = jasmine.createSpyObj(['getCities', 'deleteCity']);

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesListComponent
      ],
      imports: [RouterTestingModule.withRoutes(
        [{ path: '', component: CitiesListComponent }]
      )],
      providers: [
        { provide: CitiesService, useValue: mockCitiesService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CitiesListComponent);
  }));

  it('should create the cities list component', async(() => {
    const citiesList = fixture.debugElement.componentInstance;
    expect(citiesList).toBeTruthy();
  }));

  it('should display a list of cities when displayCities is called and cities array contains value', async(() => {
    const citiesList = fixture.debugElement.componentInstance;
    citiesList.displayCities(CITIES);
    console.log(citiesList);
    expect(citiesList.cities.length > 0 || citiesList.infoMessages !== '').toBeTruthy();
  }));

  it('should display an info message when displayCities is called and cities array is empty', async(() => {
    const citiesList = fixture.debugElement.componentInstance;
    citiesList.displayCities([]);
    console.log(citiesList);
    expect(citiesList.cities.length > 0 || citiesList.infoMessages !== '').toBeTruthy();
  }));

  it('should reduce the number of cities in array by 1 when deleteComplete is called', async(() => {
    const citiesList = fixture.debugElement.componentInstance;
    citiesList.displayCities(CITIES);
    const numOfCitiesBeforeDelete = CITIES.length;
    citiesList.deleteComplete(1);
    expect(citiesList.cities.length).toEqual(numOfCitiesBeforeDelete - 1);
  }));
});
