import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/models/RegisterUser';
import { FormsModule } from '@angular/forms';
import { ServiceService } from 'src/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private service: ServiceService,private router: Router) {}

  ngOnInit():void {

  }

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  confirmPassword: string = '';

  userData: RegisterUser = new RegisterUser();

  register() {
    this.service.registerUser(this.userData)
        .subscribe(
          response => {
            console.log('Response from server:', response);
            const userDataJSON = JSON.stringify(this.userData);
            document.cookie = `userData=${userDataJSON}; expires=${this.getCookieExpirationDate()}; path=/`;
            this.router.navigateByUrl('/home');
          },
          error => {
            console.error('Error:', error);
            if (error.status === 409) {
              alert('Conflict: User already exists.');
            }
          }
        );
}


  getCookieExpirationDate() {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    return expirationDate.toUTCString();
}
  
}
