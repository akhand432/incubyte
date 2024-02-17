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

  values: Array<string> = ["", "4", "4", "5"]

  constructor() {

  }

  ngOnInit(): void {
    this.addStringNumbers(this.values);
  }

  addStringNumbers(numbers: Array<string>) {
    let sumNumbers = 0;
    if(Array.isArray(this.values)) {
      this.values.map((value, index) => {
        if(value != "" || value != undefined) {
          sumNumbers += parseInt(value);
          console.log(value);
        }
      })
    }else {
      console.log("The string of numbers is not of type array of strings");
    }
    console.log(sumNumbers);

  }

}
