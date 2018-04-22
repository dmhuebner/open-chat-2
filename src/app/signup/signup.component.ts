import { Component, OnInit } from '@angular/core';
import { SignupForm } from '../interfaces/signup-form';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'oc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  model: SignupForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit() {
  }

  signup() {
    console.log('signup model: ', this.model);

    this.authService.signup(this.model).subscribe(userData => {
      console.log(userData);
      this.authService.setAuthToken(userData['token']);
    });
  }

}
