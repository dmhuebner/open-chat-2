import {Component, Input} from '@angular/core';
import { Room } from '../../shared/interfaces/room';
import {Message} from '../../shared/interfaces/message';

@Component({
  selector: 'oc-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor() { }

  @Input() currentRoomMessages: Message[];
  @Input() currentRoom: Room;

}
