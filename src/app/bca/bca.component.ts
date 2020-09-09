import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bca', //custom html tag or class or attribute to be used in app.component.html
  templateUrl: './bca.component.html',
  styleUrls: ['./bca.component.css']
})

export class BcaComponent{
  title = 'List of courses';
  course = ["BCA", "BSc", "B.Tech"];
  qwerty = false;
  color = "red";
  name = "";
  var10 = "sample text";
  var100;
  getTitle() {
    return this.title;
  }
  onclick() {
    alert(this.color);
    this.var100 = this.var10;
  }

  @Input() item: string;
}
