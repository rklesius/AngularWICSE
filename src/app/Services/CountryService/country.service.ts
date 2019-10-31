import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Country {
  constructor(
    public name: string,
    public code: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url: string = "assets/countries.json";

  constructor(private httpClient: HttpClient) { 
  }

  getCountries(): Observable<Country[]>
  {
    return this.httpClient.get<Country[]>(this.url);
  }
}
