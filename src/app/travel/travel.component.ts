import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  name: string;
  countries: string[] = ["Italy", "Japan", "Bermuda"];

  constructor(private route: ActivatedRoute) {
    this.name = route.snapshot.paramMap.get('name');
   }

  ngOnInit() {
  }

  addCountry(country: string) {
    this.countries.push(country);
  }

  removeCountry(index: number) {
    this.countries.splice(index, 1);
  }

}
