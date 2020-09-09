import { Component, OnInit } from '@angular/core';
import { TestingService } from '../../testing.service';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  a = "text-c2";
  b = false;
  c = true;
  // class binding has greater priority than attribute binding
  li = [1, 2, 3, 4, 4, 5, 56, 7];
  x = 11;
  var100;
   y = {
    "color": 'green',
    "font-family": 'sans-serif',
    "border": "5px ridge"
  }

  z = {
    "background-color": "silver"
  }

  public multiple = {
    "text-c1": !this.b,
    "text-c2": false,
    "text-c3": true
  }
  constructor(public var1: TestingService) {
    this.var100 = this.var1.trial();
  }

  ngOnInit(): void {
  }

}
