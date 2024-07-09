import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) {
    
  }
  GetCovidDatafromWHO():Observable<any>
  {
    return this.http.get(environment.CovidBaseURL);
  }
}
