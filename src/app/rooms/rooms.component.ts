import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'oc-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(private userService: UserService) { }

  currentUser: User;

  ngOnInit() {
    this.currentUser = this.userService.getUserFromToken();
  }

}
