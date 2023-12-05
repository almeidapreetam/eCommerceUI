import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Implement authentication logic here
    if (this.username === 'your_username' && this.password === 'your_password') {
      console.log('Login successful');
      // Redirect or perform necessary actions on successful login
    } else {
      console.log('Invalid credentials');
      // Display error message or handle accordingly for invalid credentials
    }
  }
}
