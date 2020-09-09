import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  name = "Arpan Sharma";
  person = {
    "firstname": "john",
    "lastname" : "smith"
  }
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
