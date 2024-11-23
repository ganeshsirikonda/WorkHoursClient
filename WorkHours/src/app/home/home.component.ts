import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeLogService } from '../service/employee-log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private service:EmployeeLogService){}

getData() {
  this.service.getProducts().subscribe(
    Response=>{
      console.log(Response);
    },
    error=>{
      console.log(error);
    }
    
  
  )

}

}
