import { Food } from './../food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learnts',
  templateUrl: './learnts.component.html',
  styleUrls: ['./learnts.component.css']
})
export class LearntsComponent implements OnInit {
  private ice_cream1 = {fName:"cone-ice", fCalories:200};
  private northIndian = new Food("chapathi",100);
  constructor() { }

  ngOnInit() {
    let  str: string;
   str = " This is a string";
   console.log(str);
   let num: number;
   num = 5;
   console.log("value is :"+ num);
   let aBoolean: boolean;
   aBoolean = false;
   console.log("aBoolean value is :"+aBoolean);

   console.log("Food name:" +this.ice_cream1.fName);
   console.log("Food calories:" +this.ice_cream1.fCalories);
   this.northIndian.displayAll();
  }

}
