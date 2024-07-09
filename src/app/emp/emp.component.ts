import { Component, OnInit } from '@angular/core';
import { Emp } from '../common/Entities/Emp'
import { EmpService } from '../repository/Services/emp.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  Employees: Emp[] = [];
  selectedEmployee: any;
  constructor(private _employeeservice: EmpService,private _httpClient:HttpClient) { }
  ngOnInit(): void {
    this.GetEmpolyeeData();
  }

  GetEmpolyeeData() {
    this._httpClient.get('./assets/emp.json').subscribe((emp) => {
      this.Employees = Object.assign([], emp);  
      console.log(emp); // Use the data as needed
    });

    // this._employeeservice.GetEmpData()  .subscribe(
    //   (empsdata) => {

    //     this.Employees = empsdata.data;
    //     //console.log(this.Employees);
    //   },
    //   (logerror) => {
    //     console.log(logerror);
    //   }
    // );
  }

  filterEmployees() {
    if (this.selectedEmployee != "") {
      this.Employees = this.Employees.filter(item => item.employee_name.toLowerCase().includes(this.selectedEmployee.toLowerCase()));
    }
    else {
      this.GetEmpolyeeData();
    }
    //console.log(this.selectedEmployee.toLowerCase());
  }
}
