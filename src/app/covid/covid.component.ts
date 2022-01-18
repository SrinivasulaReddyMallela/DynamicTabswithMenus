import { Component, OnInit } from '@angular/core';
import { covidentity } from '../Entities/covidentity';
import { CovidService } from '../Services/covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {


  CovidData: any = {};
  covidinfo: covidentity[] = [];
  selectedCountry: any;
  filterdOptions = [];


  constructor(private _covidService: CovidService) { }

  ngOnInit(): void {
    this.GetFullCovidDatafromService();
  }

  filtercountriess() {
    if (this.selectedCountry != "") {
      this.covidinfo = this.covidinfo.filter(item => item.Country.toLowerCase().includes(this.selectedCountry.toLowerCase()));
    }
    else {
      this.GetFullCovidDatafromService();
    }
    //console.log(this.selectedCountry.toLowerCase());

  }

  GetFullCovidDatafromService() {
    this._covidService.GetCovidDatafromWHO().subscribe(
      (posres) => {
        this.CovidData = posres;
        this.covidinfo = this.CovidData.Countries;
      }
      , (logerr) => {
        console.log(logerr);
      }
    );
  }
}
