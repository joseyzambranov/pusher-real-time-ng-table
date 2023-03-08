import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgAlertModule } from '@theo4u/ng-alert';

import { EmployeeService } from './services/employee.service';
import { PusherService } from './services/pusher.service';
import { HttpClientModule } from '@angular/common/http';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component'; 
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAlertModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService, PusherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
