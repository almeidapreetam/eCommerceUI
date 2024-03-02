import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginUser } from 'src/models/LoginUser';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: ServiceService, private router: Router) {}

  loginModel: LoginUser = new LoginUser();

  login() {

    this.deleteCookie('userData');
    this.service.loginuser(this.loginModel)
        .subscribe(
          response => {
            console.log('Response from server:', response);
            const userDataJSON = JSON.stringify(response);
            document.cookie = `userData=${userDataJSON}; expires=${this.getCookieExpirationDate()}; path=/`;
            this.router.navigateByUrl('/home');
          },
          error => {
            console.error('Error:', error);
            alert("Invalid user name or password");
          }
        );
}
        getCookieExpirationDate() {
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 1);
          return expirationDate.toUTCString();
        }
         deleteCookie(name: any) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
      }
  }

