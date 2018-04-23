import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignupRequest } from '../../interfaces/signup-request';
import { UrlBuilderService } from '../urlBuilder/url-builder.service';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private urlBuilder: UrlBuilderService) { }

  authToken: string;

  signup(signupModelObject) {
    const url = this.urlBuilder.openChatAPI('auth/signup');
    const request = this.createSignupRequest(signupModelObject);

    return this.http.post(url, request);
  }

  setAuthToken(token): void {
    this.authToken = token;
    console.log('authToken: ', this.authToken);
    localStorage.setItem('authToken', token);
  }

  authenticate(loginModelObject) {
    const url = this.urlBuilder.openChatAPI('auth/signin');
    const request = this.createLoginRequest(loginModelObject);

    return this.http.post(url, request);
  }

  private createSignupRequest(signupModelObject): SignupRequest {
    if (signupModelObject.password === signupModelObject.confirmPassword) {
      return {
        username: signupModelObject.username,
        email: signupModelObject.email,
        password: signupModelObject.password
      };
    }
  }

  // TODO this may be unnecessary
  private createLoginRequest(loginModelObject) {
    return {
      email: loginModelObject.email,
      password: loginModelObject.password
    };
  }

}
