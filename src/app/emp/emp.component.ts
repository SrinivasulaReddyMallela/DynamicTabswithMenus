import { Component, OnInit } from '@angular/core';
import { Emp } from '../Entities/Emp'
import { EmpService } from '../Services/emp.service';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss']
})
export class EmpComponent implements OnInit {
  Employees: Emp[] = [];
  selectedEmployee: any;
  constructor(private _employeeservice: EmpService) { }
  ngOnInit(): void {
    this.GetEmpolyeeData();
  }

  GetEmpolyeeData() {
    this._employeeservice.GetEmpData().subscribe(
      (empsdata) => {

        this.Employees = empsdata.data;
        //console.log(this.Employees);
      },
      (logerror) => {
        console.log(logerror);
      }
    );
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
