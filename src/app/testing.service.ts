import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TestingService {
  trial() {
    var res1: Object;
    var res2: Object;
    return [
      res1 = {
        "border": "5px solid"
      },
      res2 = {
        "color": 'green',
        "font-family": 'sans-serif',
      },
    ]
  }
  constructor() { }
}
