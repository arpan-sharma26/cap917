import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Output() childEvent = new EventEmitter();
  @Input() public parentData;
 
  onDisplay() {
    this.childEvent.emit("Hey Lpu Welcome");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
