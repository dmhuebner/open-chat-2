import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../../shared/interfaces/room';
import { MatDialog } from '@angular/material';
import { UserService } from '../../shared/services/user/user.service';
import { NewRoomModalComponent } from '../new-room-modal/new-room-modal.component';
import { RoomService } from '../../shared/services/room/room.service';

@Component({
  selector: 'oc-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent {
  @Input()
  rooms: Room[];

  @Output()
  roomClicked: EventEmitter<Room> = new EventEmitter<Room>();

  newRoom: Room;
  currentRoom: Room;

  constructor(public dialog: MatDialog,
              private userService: UserService,
              private roomService: RoomService) { }

  getMessages(room) {
    this.currentRoom = room;
    this.roomClicked.emit(room);
    console.log(this.currentRoom);
  }

  newRoomDialog(): void {
    const dialogRef = this.dialog.open(NewRoomModalComponent, {
      width: '300px',
      data: { user: this.userService.currentUser }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newRoom = result;
      this.createNewRoom(this.newRoom);
    }, (error) => {
      console.log(error);
    });
  }

  private createNewRoom(newRoom: Room): void {
    this.roomService.createNewRoom(newRoom).subscribe((result) => {
      if (result) {
        this.roomService.getUsersRooms(this.userService.currentUser).subscribe((response) => {
          this.rooms = response;
        }, (error) => {
          console.log(error);
        });
      }
    }, (error) => {
      console.log(error);
    });
  }

}
