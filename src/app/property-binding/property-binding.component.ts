import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  title = "Property Binding";
  //attribute always binded to HTML, but value related to DOM.
  // property binding works more efficiently with boolean type html attribute
  myID = "testID";
  isDisabled = false;
  sample = "radio";
  user = 2;
  
  constructor() { }

  ngOnInit(): void {
  }

}
