import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
empCode: string;
empCodeSubsc: string;
  constructor(
  private _router: Router,
  private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.empCode = this._activatedRoute.snapshot.queryParamMap.get("code");
    this._activatedRoute.queryParamMap.subscribe(params => {
      console.log("via subscribe" +
      params.get('code'));

      this.empCodeSubsc = params.get('code');
      console.log("via subscribe empcodesubsc:" +
      this.empCodeSubsc);
    });
  }

}
