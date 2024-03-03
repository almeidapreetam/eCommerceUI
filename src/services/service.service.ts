import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/models/RegisterUser';
import { LoginUser } from 'src/models/LoginUser';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  apiUrl = 'https://localhost:44301/api/';
 
   registerUser(registerUser : RegisterUser): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Login/Register', registerUser);
  }
  loginuser(loginuser : LoginUser): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Login/Login', loginuser);
  }
  getMenuBar(): Observable<any> {
    return this.http.get(this.apiUrl + 'Master/MenuBar/GetMenuBarData');
  }
  getImageSlider(): Observable<any> {
    return this.http.get(this.apiUrl + 'Master/ImageSlider/GetAll');
  }

  fetchHomeCategory():Observable<any> {
    return this.http.get(this.apiUrl+'Home/Category'); 
  }
}
