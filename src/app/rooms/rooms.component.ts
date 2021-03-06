import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { UserService } from '../shared/services/user/user.service';
import { User } from '../shared/interfaces/user';
import { RoomService } from '../shared/services/room/room.service';
import { Room } from '../shared/interfaces/room';
import { Message } from '../shared/interfaces/message';

@Component({
  selector: 'oc-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  constructor(private userService: UserService,
              private roomService: RoomService) { }

  @Output()
  userSet: EventEmitter<User> = new EventEmitter<User>();

  currentUser: User;
  roomsList: Room[];
  currentRoomsMessages: Message[];
  currentRoom: Room;
  roomsDrawerOpen = true;

  ngOnInit() {
    this.currentUser = this.userService.getUserFromToken();
    this.userSet.emit(this.currentUser);
    this.setUsersRooms(this.currentUser);
  }

  onRoomClicked(eventData) {
    this.getMessagesByRoomId(eventData);
    this.currentRoom = eventData;
  }

  onNewMessageAdded(eventData) {
    this.currentRoomsMessages.push(eventData);
  }

  toggleRoomsDrawer() {
    this.roomsDrawerOpen = !this.roomsDrawerOpen;
  }

  private setUsersRooms(user: User) {
    this.roomService.getUsersRooms(user).subscribe((response) => {
      if (response) {
        this.roomsList = response;
      }
    }, (error) => {
      console.log(error);
    });
  }

  private getMessagesByRoomId(eventData) {
    this.roomService.getMessagesByRoom(eventData._id).subscribe((messages) => {
      this.currentRoomsMessages = messages;
    }, (error) => {
      console.log(error);
    });
  }

}
