import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  title = "Employee Details Section";
  employee = [];
  constructor(private var1:EmployeeService){}

  ngOnInit(): void {
    this.employee = this.var1.getEmployees();
  }

}
