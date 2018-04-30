import { Component, OnInit } from '@angular/core';
import { Room } from '../../shared/interfaces/room';
import { RoomService } from '../../shared/services/room/room.service';

@Component({
  selector: 'oc-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  constructor(private roomService: RoomService) { }

  roomsList: Room[];

  ngOnInit() {
    this.roomsList = [
      {
        roomName: 'Example Room',
        userIds: ['12345', '67890'],
        private: true,
        roomOwnerId: '12345',
        _id: '12345'
      },
      {
        roomName: 'Example Room 2',
        userIds: ['12345', '67890'],
        private: true,
        roomOwnerId: '12345',
        _id: '67890'
      }
    ];
  }

  getAllRooms() {
    this.roomService.getAllRooms().subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

}
