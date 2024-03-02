import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';
import { RegisterUser } from 'src/models/RegisterUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData: RegisterUser = new RegisterUser();
  constructor(private service : ServiceService,private router: Router ){};

  ngOnInit():void {
    // this.userData = this.getUserFromCookies();
    // if (!(this.userData && this.userData.emailAddress))
    // {
    //   this.router.navigateByUrl('/login');
    // } 
  }

  getUserFromCookies(): any {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'userData') {
            return JSON.parse(decodeURIComponent(value));
        }
    }
    return null; // Return null if userData cookie is not found
}

}
