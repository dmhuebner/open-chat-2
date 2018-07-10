import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewChecked} from '@angular/core';
import { Room } from '../../shared/interfaces/room';
import { Message } from '../../shared/interfaces/message';
import { MessageService } from '../../shared/services/message/message.service';
import * as io from 'socket.io-client';
import { MatDialog } from '@angular/material';
import { AddUserToRoomModalComponent } from '../add-user-to-room-modal/add-user-to-room-modal.component';
import { RoomService } from '../../shared/services/room/room.service';

@Component({
  selector: 'oc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, AfterViewChecked {

  constructor(private messageService: MessageService,
              private dialog: MatDialog,
              private roomService: RoomService) { }

  @Input() currentRoomMessages: Message[];
  @Input() currentRoom: Room;

  @Output() newMessageAdded: EventEmitter<Message> = new EventEmitter<Message>();

  @ViewChild('scrollToBottom') private myScrollContainer: ElementRef;

  newMessage: string;

  private socket = io('http://localhost:8000/').connect();

  ngOnInit() {
    this.socket.on('new-room-message', (newMessage) => {
      this.newMessageAdded.emit(newMessage);
      this.scrollToBottom();
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  createNewMessage(): void {
    this.messageService.createNewMessage(this.newMessage, this.currentRoom).subscribe((result) => {
      if (result) {
        this.newMessage = '';
      }
    }, (error) => {
      console.log(error);
    });
  }

  addUserToRoomDialog(): void {
    const dialogRef = this.dialog.open(AddUserToRoomModalComponent, {
      width: '400px',
      data: { room: this.currentRoom }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const userToAdd = result.userEmail;
        const roomId = result.roomId;

        this.addUserToRoom(roomId, userToAdd);
      }
    }, (error) => {
      console.log(error);
    });
  }

  private scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (error) {
      console.log(error);
    }
  }

  private addUserToRoom(roomId, userEmailToAdd) {
    this.roomService.addUserToRoom(roomId, userEmailToAdd).subscribe((result) => {
      if (result) {
        // TODO toast success message
      }
    }, (error) => {
      console.log(error);
    });
  }

}
