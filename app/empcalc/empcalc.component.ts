import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { empty } from 'rxjs';

@Component({
  selector: 'app-empcalc',
  templateUrl: './empcalc.component.html',
  styleUrls: ['./empcalc.component.css']
})
export class EmpcalcComponent implements OnInit {
  employees: Employee[];

  public title: Array<{text: string, value: string}> = [
    {text:"Mr", value: "Mr"},
    {text:"Mrs", value: "Mrs"},
    {text:"Ms", value: "Ms"}];

  constructor(
    private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
  calc(emp: Employee): number {
    let calc: number;
    calc = +(emp.annualSalary) +  +(emp.pf);
    emp.ctc = calc;
    return calc;
  }

  onchangeTitle(vals:any) {
    console.log("Heiee" +vals)
  }
  onchangeName(emp: Employee) {
    console.log(this.title+ emp.name)
  }

 /* addtitle(emp: Employee['name']): string {
    let addtitle: string;
    addtitle = emp.concat('title','name');
    return addtitle;
  } */

}
