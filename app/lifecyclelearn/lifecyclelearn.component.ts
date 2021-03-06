import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit, AfterViewChecked,
  SimpleChanges, Input, EventEmitter, AfterContentInit, AfterContentChecked, Output } from '@angular/core';

@Component({
  selector: 'app-lifecyclelearn',
  templateUrl: './lifecyclelearn.component.html',
  styleUrls: ['./lifecyclelearn.component.css']
})
export class LifecyclelearnComponent implements OnInit, OnChanges, OnDestroy,
AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Output()
  evDataChanged: EventEmitter<number> = new EventEmitter <number>();

  @Input()
  simpleInput: string;
  numval: number = 10;
  simpch: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log( "Onchange");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue =
        ${cur}, previousValue = ${prev}`);
    }
  }
  ngOnDestroy(): void {
    console.log( "Ondestroy");
  }
  ngAfterViewInit(): void {
    console.log( "after view init");
  }
  ngAfterViewChecked(): void {
    console.log( "View Checked");
  }
  ngAfterContentInit(): void {
    console.log( 'After Content init');
  }
  ngAfterContentChecked(): void {
    console.log( 'Content Checked');
  }

  constructor() { }

  ngOnInit() {
    console.log( 'on ngInit');
  }

  fnAddNumber(): void {
    this.numval += 100;
    this.evDataChanged.emit(
      this.numval);

}
deleteNumber(): void {
    this.numval -= 10;
    this.evDataChanged.emit(
      this.numval);
   }
  }


