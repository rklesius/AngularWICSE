import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { CountryListComponent } from './country-list/country-list.component';


const routes: Routes = [
  { path: 'travel/:name', component: TravelComponent },
  { path: 'countries', component: CountryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
