import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewChecked} from '@angular/core';
import { Room } from '../../shared/interfaces/room';
import { Message } from '../../shared/interfaces/message';
import { MessageService } from '../../shared/services/message/message.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'oc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, AfterViewChecked {

  constructor(private messageService: MessageService) { }

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

  private scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (error) {
      console.log(error);
    }
  }

}
