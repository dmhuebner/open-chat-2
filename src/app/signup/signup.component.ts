import { Component, OnInit } from '@angular/core';
import { SignupForm } from '../shared/interfaces/signup-form';
import { AuthService } from '../shared/services/auth/auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../shared/services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'oc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  model: SignupForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit() {
  }

  signUp() {
    console.log('signup model: ', this.model);

    this.authService.signup(this.model).subscribe(response => {
      console.log(response);
      this.authService.setAuthToken(response['token']);
      this.userService.getUserFromToken();
      this.router.navigate(['/rooms']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
