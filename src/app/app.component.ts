import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assesement';

  // values: Array<string> = ["", "4", "4", "5"];

  constructor() {

  }

  ngOnInit(): void {
    this.addStringNumbers(["", "4", "4,5,9", "5,10"]);
  }

  addStringNumbers(values: Array<string>) {
    let sumNumbers: any = [], addNumbers = 0;
    if(Array.isArray(values)) {
      values.map((value, index) => {
        addNumbers = 0;
        if(value == "" && value != undefined) {
          sumNumbers.push(0);
          console.log(value);
        }else {
          let splittedValue = value.split(',');
          splittedValue.map((value) => {
            addNumbers += parseInt(value);
          })
          sumNumbers.push(addNumbers);
        }
      })
    }else {
      console.log("The string of numbers is not of type array of strings");
    }
    console.log(sumNumbers);

  }

}