import { Component } from '@angular/core';

/* this is a decorator (custom html tag) */
@Component({
  selector: 'app-root', // this selector goes to index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName: string = "Arpan Sharma";
  title = 'cap917';
  name = "Jamie Newton";
  message;
  currentItem = 123;
}