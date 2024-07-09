import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private _httpClient:HttpClient) { }

  public GetEmpData()//:Observable<any>
  {
    //return this._httpClient.get(environment.EmpServiceURL+'v1/employees');
    this._httpClient.get('./emp.json').subscribe((data) => {
       
      console.log(data); // Use the data as needed
    });
  }
}
