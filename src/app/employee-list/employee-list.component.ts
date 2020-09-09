import { Component, OnInit } from '@angular/core';
import { EmployeeService, book } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee = [];
  a = "";
  constructor(private var1 : EmployeeService, private b : book) { }

  ngOnInit(): void {
    this.employee = this.var1.getEmployees();
    this.a = this.b.getBook();
  }

}
