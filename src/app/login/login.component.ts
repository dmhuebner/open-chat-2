import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user/user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'oc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) { }

  model = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  login() {
    this.authService.authenticate(this.model).subscribe((response) => {
      console.log(response);
      this.authService.setAuthToken(response['token']);
      this.userService.getUserFromToken();
      this.router.navigate(['/rooms']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
