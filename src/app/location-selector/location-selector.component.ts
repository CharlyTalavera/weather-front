import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../weather-api.service'
import { FormControl } from '@angular/forms';
import { Location } from './location.model';
import { DataService } from '../data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-location-selector',
  templateUrl: './location-selector.component.html',
  styleUrls: ['./location-selector.component.css']
})
export class LocationSelectorComponent implements OnInit {
  options: string[] = ["Current Location", "Search Location"];
  selectedOption: string = "Current Location";
  currentLocation: Location;
  searchString: string = "";
  searchResult: any[] = null;

  searchCtrl: FormControl;

  constructor(private weatherApi : WeatherApiService, private data: DataService) {
    this.searchCtrl = new FormControl();
    this.searchCtrl.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((value) => this.search(this, value))
  }

  async ngOnInit() {
    this.currentLocation = <Location> (await this.weatherApi.getCurrentLocation());
    this.data.changeLocation(this.currentLocation);
  }

  public async search(self, value){
    if(value.length < 4){
      this.searchResult = [];
      return;
    }

    this.searchResult = await self.weatherApi.searchCitiesByName(value);
  }

  public updateSelection(value){
    this.data.changeLocation(value);
  }

  public getOptionText(location){
    return location ? location.name : "";
  }

  public async radioChange(event){
    if(event.value === "Current Location"){
      this.currentLocation = <Location> (await this.weatherApi.getCurrentLocation());
      this.data.changeLocation(this.currentLocation);
    }

  }

}
