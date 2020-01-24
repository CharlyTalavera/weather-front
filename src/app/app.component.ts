import { Component } from '@angular/core';
import { LocationSelectorComponent } from "./location-selector/location-selector.component";
import { Location } from './location-selector/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-front';
}


