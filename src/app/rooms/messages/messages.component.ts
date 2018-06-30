import { Component, Input } from '@angular/core';
import { Room } from '../../shared/interfaces/room';
import { Message } from '../../shared/interfaces/message';
import { MessageService } from '../../shared/services/message/message.service';

@Component({
  selector: 'oc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor(private messageService: MessageService) { }

  @Input() currentRoomMessages: Message[];
  @Input() currentRoom: Room;

  newMessage: string;

  createNewMessage(): void {
    this.messageService.createNewMessage(this.newMessage, this.currentRoom).subscribe((result) => {
      if (result) {
        this.newMessage = '';
        console.log(result);
      }
    }, (error) => {
      console.log(error);
    });
  }

}
