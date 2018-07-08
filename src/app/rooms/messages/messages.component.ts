import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from '../../shared/interfaces/room';
import { Message } from '../../shared/interfaces/message';
import { MessageService } from '../../shared/services/message/message.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'oc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  @Input() currentRoomMessages: Message[];
  @Input() currentRoom: Room;

  @Output() newMessageAdded: EventEmitter<Message> = new EventEmitter<Message>();

  newMessage: string;

  private socket = io('http://localhost:8000/').connect();

  ngOnInit() {
    this.socket.on('new-room-message', (newMessage) => {
      this.newMessageAdded.emit(newMessage);
    });
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

}
