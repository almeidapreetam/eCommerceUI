import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginUser } from 'src/models/LoginUser';
import { DataService } from 'src/services/dataService';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: ServiceService, private router: Router ,private dataservice : DataService) {}

  loginModel: LoginUser = new LoginUser();

  login() {
          this.service.loginuser(this.loginModel)
              .subscribe(
                response => {
                  const userDataJSON = JSON.stringify(response);
                  this.dataservice.saveUserSession(userDataJSON);
                  this.router.navigateByUrl('/home');
                },
                error => {
                  console.error('Error:', error);
                  alert("Invalid user name or password");
                }
              );
          }
      
  }

