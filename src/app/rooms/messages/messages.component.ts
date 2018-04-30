import { Component, OnInit } from '@angular/core';
import { Room } from '../../shared/interfaces/room';

@Component({
  selector: 'oc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  currentRoom: Room;

  ngOnInit() {
    this.currentRoom = {
      roomName: 'Example Room',
      userIds: ['12345', '67890'],
      private: true,
      roomOwnerId: '12345',
      _id: '12345'
    };
  }

}
