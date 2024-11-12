import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLogService {
  private apiUrl = "http://localhost:8080/login";

  constructor(private http: HttpClient) {}

  validateLogin(formData: any): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, formData);
  }
}


