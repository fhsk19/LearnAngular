import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  @Input()
  // tslint:disable-next-line:ban-types
  customInputAttr: String;
// tslint:disable-next-line: ban-types
  stringInterpolation: String;
  numberInterpolation: number;
  constructor() { }
// tslint:disable-next-line: ban-types
  fname: String = 'Faisal';
  disableflag: boolean;

  ngOnInit() {
    this.stringInterpolation = 'Learning Basics';
    this.numberInterpolation = 40;
  }
myalert() {
   alert('This is event binding way');
 }
 toggle() {
   this.disableflag = this.disableflag ? false : true;
 }
}
