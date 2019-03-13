import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclelearn-parent',
  templateUrl: './lifecyclelearn-parent.component.html',
  styleUrls: ['./lifecyclelearn-parent.component.css']
})
export class LifecyclelearnParentComponent implements OnInit {
  userText = 'Enter name';
  constructor() { }

  ngOnInit() {
  }
  val: number = 0;

  dispFromChild(argVal: number): void {
    this.val = argVal;
    console.log(argVal);
  }
}
