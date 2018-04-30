import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { UserService } from '../shared/services/user/user.service';
import { User } from '../shared/interfaces/user';

@Component({
  selector: 'oc-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Output()
  userSet: EventEmitter<User> = new EventEmitter<User>();

  currentUser: User;

  ngOnInit() {
    this.currentUser = this.userService.getUserFromToken();
    this.userSet.emit(this.currentUser);
  }

}
