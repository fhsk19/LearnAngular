import { EmployeeService } from './../employee.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { getRenderedText } from '@angular/core/src/render3';
import {Employee} from '../employee';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html',
  styles: [`.ng-invalid { border:2px solid:red;}
    .ng - valid{
    border: 2px solid: green;
  };`]

})
export class CreateempComponent implements OnInit {
  newEmp: Employee = {
    code: 'emp101',
    name: 'Faisal',
    gender: 'male',
    annualSalary: 0,
    dateOfBirth: null,
    pf: 0,
    ctc: 0,
    comment: ''
  };
  dobErr: string = "";
  constructor(private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
  }
checkDob(dateofBirth:string) {
  var db = new Date(this.newEmp.dateOfBirth);
  var curd = new Date();
  curd.setDate(curd.getDate() - 1);

  if (db > curd) {
    this.dobErr = "Error!! Are you really from the future?!"
    return;
  } else {
    this.dobErr = "";
  }
}

OnSubmit(form: NgForm) {
  console.log(form);
  console.log(this.newEmp);
  this.employeeService.AddEmployees(this.newEmp);
  this.router.navigate(['/home']);
}
}
