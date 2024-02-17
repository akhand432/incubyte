import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assesement';

  values: Array<string> = ["", "4", "3,4", "5"]

  constructor() {

  }

  ngOnInit(): void {
    this.addStringNumbers(this.values);
  }

  addStringNumbers(numbers: Array<string>) {

  }

}
