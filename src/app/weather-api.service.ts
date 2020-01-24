import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http: HttpClient) { }


  public getCurrentLocation(){
    return this.http.get(`${environment.baseUrl}/location`).toPromise();
  }

  public searchCitiesByName(name){
    return this.http.get(`${environment.baseUrl}/city/search?q=${name}`).toPromise();
  }

  public getTemperatureByCoordinates(lat, lon){
    return this.http.get(`${environment.baseUrl}/city?lat=${lat}&lon=${lon}`).toPromise();
  }
}
