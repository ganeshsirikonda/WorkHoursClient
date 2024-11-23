import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeLogService {
  // private apiUrl = 'http://localhost:8089/EmployeeLogValidate';
  private apiUrl = 'http://localhost:8089'
  constructor(private http: HttpClient) {}

  validateLogin(formData: any): Observable<string> {
    console.log('forntend', formData);
    
    return this.http.post<string>(`${this.apiUrl}/EmployeeLogValidate`, formData);
  }



  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getProducts`);
  }
  
}
