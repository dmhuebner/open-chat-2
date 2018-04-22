import { Component, OnInit } from '@angular/core';
import {SignupForm} from '../interfaces/signup-form';

@Component({
  selector: 'oc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  model: SignupForm = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  ngOnInit() {
  }

  signup() {
    console.log(this.model);
  }

}
