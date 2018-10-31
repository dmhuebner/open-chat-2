import { Component, OnInit } from '@angular/core';
import { SignupForm } from '../shared/interfaces/signup-form';
import { AuthService } from '../shared/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../shared/services/user/user.service';
import { Router } from '@angular/router';
import { LoggerService } from '../shared/services/logger/logger.service';

@Component({
  selector: 'oc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private loggerService: LoggerService) { }

  model: SignupForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit() {
  }

  signUp() {
    this.authService.signup(this.model).subscribe(response => {
      console.log(response);
      this.authService.setAuthToken(response['token']);
      this.userService.getUserFromToken();
      this.router.navigate(['/rooms']);
      this.loggerService.success('Welcome!');
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loggerService.error(`Error: ${error.status}`, error.error, error);
    });
  }

}
