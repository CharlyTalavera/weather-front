import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location-selector/location.model';
import { DataService } from '../data.service';
import { WeatherApiService } from '../weather-api.service'; 
@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  public currentLocation: Location;
  public weather: any;
  constructor(private data: DataService, private weatherApi: WeatherApiService) { }
  
  ngOnInit() {
    this.data.currentLocation.subscribe(async location => {
      this.currentLocation = location;
      if(location){
        this.weather = await this.weatherApi.getTemperatureByCoordinates(location.lat, location.lon);
      }
    });
  }

}
