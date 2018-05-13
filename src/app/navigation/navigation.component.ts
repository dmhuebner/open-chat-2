import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces/user';
import { UserService } from '../shared/services/user/user.service';

@Component({
  selector: 'oc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private userService: UserService) { }

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe((user) => this.currentUser = user);
  }

}
