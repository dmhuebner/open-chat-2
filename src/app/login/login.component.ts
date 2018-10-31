import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggerService } from '../shared/services/logger/logger.service';

@Component({
  selector: 'oc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService,
              private loggerService: LoggerService) { }

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
      this.loggerService.success('Welcome!');
    }, (error: HttpErrorResponse) => {
      this.loggerService.error(`Error: ${error.status}`, error.statusText, error);
    });
  }

}
