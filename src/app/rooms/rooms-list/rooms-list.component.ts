import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Room } from '../../shared/interfaces/room';
import {User} from '../../shared/interfaces/user';

@Component({
  selector: 'oc-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  @Input()
  rooms: Room[];

  @Output()
  roomClicked: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  getMessages(room) {
    this.roomClicked.emit(room);
  }

}
