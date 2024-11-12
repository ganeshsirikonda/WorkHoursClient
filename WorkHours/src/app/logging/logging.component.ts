import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployeeLogService } from '../service/employee-log.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrl: './logging.component.css'
})

export class LoggingComponent implements OnInit {

  loginForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private employeeLogService: EmployeeLogService) {
    this.loginForm = this.fb.group({
      ginNo: [''],
      password: ['']
    });
  }
  ngOnInit(): void {
   
  }


  submit() {
    console.log("in submint methid");
    this.employeeLogService.validateLogin(this.loginForm.value).subscribe(
      (isValid) => {
        console.log("agter gining ot bacengg");
        this.message = isValid ? 'Login successful' : 'Incorrect username or password';
      },
      (error) => {
        console.error(error);
        this.message = 'An error occurred during login';
      }
    );
  }
}
