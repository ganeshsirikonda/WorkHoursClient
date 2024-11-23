import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployeeLogService } from '../service/employee-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrl: './logging.component.css'
})

export class LoggingComponent implements OnInit {
  
  loginForm: FormGroup;
  loginError:boolean|undefined;
  
  constructor(private fb: FormBuilder, private employeeLogService: EmployeeLogService,private rout:Router) {
    this.loginForm = this.fb.group({
      ginno: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  ngOnInit(): void {
    
  }

  onIdInput(event: Event) {
    const input = event.target as HTMLInputElement;
    // console.log(input);

    let value = input.value;
    // console.log("value",value);
    value = value.replace(/[^0-9]/g, '');
    // console.log("value  replace",value);

    if (value.length > 0 && Number(value) === 0) {
      value = '';
    }
  }

  focusNext(event:any, nextField: HTMLElement) {
     if(event.key === 'Enter')
     {
      nextField.focus();
      event.preventDefault();
     }
  }

 submit() {
  if (this.loginForm.valid) {
    this.employeeLogService.validateLogin(this.loginForm.value).subscribe(
      response => {
        console.log("Response from server:", response);
        
          this.loginError = false;
          this.rout.navigateByUrl('/home');
        
      },
      error => {
        console.error('Error response from server:', error);
        if (error.status === 401) {
          this.loginError = true;
          console.error('Invalid credentials:', error.error);
        }
      }
    );
  }
}




}


