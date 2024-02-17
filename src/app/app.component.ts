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
    this.addStringNumbers(["", "4", "4,5,9", "5,10", "1\n2,3", "1,\n"]);
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
          let splittedValue = value.split(/,|\n/);
          splittedValue.map((value) => {
            if(parseInt(value) < 0) {
              console.log("Negative numbers not allowed");
              return;
            } else if(isNaN(parseInt(value))) {
              console.log("Invalid number format");
              return;
              // throw new Error('Invalid number');
            }else {
              addNumbers += parseInt(value);
            }
           
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