import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BcaComponent } from './bca/bca.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { book } from './employee.service';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { TempRefComponent } from './temp-ref/temp-ref.component';
import { TestingService } from './testing.service';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    BcaComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    TempRefComponent,
    TestComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService, book, TestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
