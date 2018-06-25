import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor() { }

  private userSource = new BehaviorSubject<User>(null);
  currentUser: User;
  currentUserObservable: Observable<User> = this.userSource.asObservable();

  getUserFromToken(): User {
    const token = localStorage.getItem('authToken');
    const parsedTokenArray = token.split('.');
    const user = JSON.parse(atob(parsedTokenArray[1])).user;
    this.setCurrentUser(user);
    return user;
  }

  private setCurrentUser(user: User) {
    this.userSource.next(user);
    this.currentUser = user;
  }

}
