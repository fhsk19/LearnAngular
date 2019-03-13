import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  employees: Employee[];

  constructor(
    private _employeeService: EmployeeService) { }

  ngOnInit() {
    let key = 'code';
    localStorage.removeItem(key);
    this.employees = this._employeeService.getEmployees();
  }

  addEmployees(){
    let emp: Employee = new Employee(
      'default', 'default', 'Female', 3000, '08/09/1988');
    this._employeeService.AddEmployees(emp);
  }

}
