import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Update with your API URL

  constructor(private http: HttpClient) {}

  private createBasicAuthHeader(email: string, password: string): HttpHeaders {
    const authString = btoa(`${email}:${password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${authString}`,
      'Content-Type': 'application/json'
    });
  }

  login(email: string, password: string): Observable<any> {
    const headers = this.createBasicAuthHeader(email, password);
    return this.http.post(`${this.apiUrl}/login`, {}, { headers }).pipe(
      tap(response => {
        // Store credentials if you need to maintain the session
        localStorage.setItem('credentials', btoa(`${email}:${password}`));
      })
    );
  }

  register(userData: {
    name: string,
    lastname: string,
    email: string,
    password: string,
    repassword: string
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  logout(): void {
    localStorage.removeItem('credentials');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('credentials');
  }
}