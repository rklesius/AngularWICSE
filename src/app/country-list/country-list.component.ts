import { Component, OnInit } from '@angular/core';
import { Country, CountryService } from "../Services/CountryService/Country.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countrySubscription: Subscription;
  countryList: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.updateCountries();
  }

  private updateCountries() {
    this.countrySubscription = this.countryService.getCountries().subscribe(response => {
        this.countryList = response;
        }
      );
  }

}
