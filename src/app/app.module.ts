import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationSelectorComponent } from './location-selector/location-selector.component';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCardModule} from '@angular/material/card';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { DataService } from './data.service';
@NgModule({
  declarations: [
    AppComponent,
    LocationSelectorComponent,
    WeatherInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [
    LocationSelectorComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
