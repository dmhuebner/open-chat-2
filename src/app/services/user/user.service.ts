import { Injectable } from '@angular/core';
import {User} from '../../interfaces/user';

@Injectable()
export class UserService {

  constructor() { }

  currentUser: User;

  getUserFromToken(): User {
    const token = localStorage.getItem('authToken');
    const parsedTokenArray = token.split('.');
    // console.log('user from token', JSON.parse(atob(parsedTokenArray[1])).user);
    const user = JSON.parse(atob(parsedTokenArray[1])).user;
    this.setCurrentUser(user);
    return user;
  }

  private setCurrentUser(user: User) {
    this.currentUser = {
      username: user.username,
      email: user.email,
      id: user.id
    };
  }

}
