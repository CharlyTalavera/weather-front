import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from './location-selector/location.model'
@Injectable()
export class DataService {

  private locationSource = new BehaviorSubject(<Location> null);
  currentLocation = this.locationSource.asObservable();

  constructor() { }

  changeLocation(location: Location) {
    this.locationSource.next(location)
  }

}