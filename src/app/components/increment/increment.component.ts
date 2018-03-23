import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('name') legend: string = 'Leyenda';
  @Input() percentage: number = 50;

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeValue(value: number) {
    if (this.percentage >= 100 && value > 0) {
      this.percentage = 100;
      return;
    }

    if (this.percentage <= 0 && value < 0) {
      this.percentage = 0;
      return;
    }
    this.percentage += value;

    this.valueChanged.emit( this.percentage );
  }

  onChange( newValue: number) {

    // let input: any = document.getElementsByName('progress')[0];

    // console.log(input.value);

    if (newValue >= 100) {
      this.percentage = 100;
    } else if (newValue <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }
    // input.value = Number(this.percentage);

    this.txtProgress.nativeElement.value = this.percentage;
    this.changeValue( this.percentage );
    this.txtProgress.nativeElement.focus();
  }

}
