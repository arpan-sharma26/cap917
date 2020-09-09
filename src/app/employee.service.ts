import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees() {
    return [{ id: 1, name: "name 1", course: "BSc CS" },
      { id: 2, name: "name 2", course: "BTech" },
    {id: 3, name: "ABC XYZ", course: "BBA"}]
  }
  constructor() { }
}

export class book {
  getBook() {
    return "The Alchemist";
  }
}