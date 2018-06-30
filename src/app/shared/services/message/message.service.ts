import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../../interfaces/message';
import { UrlBuilderService } from '../urlBuilder/url-builder.service';
import { Room } from '../../interfaces/room';
import { UserService } from '../user/user.service';

@Injectable()
export class MessageService {

  constructor(private http: HttpClient,
              private urlBuilder: UrlBuilderService,
              private userService: UserService) { }

  createNewMessage(newMessage: string, room: Room) {
    const request = this.createNewMessageRequest(newMessage, room);
    const url = this.urlBuilder.openChatAPI('rooms') + '/' + room._id + '/messages';
    const authToken = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + authToken
      })
    };

    return this.http.post<Message[]>(url, request, httpOptions);
  }

  private createNewMessageRequest(newMessageContent: string, room: Room): Message {
    const newMessageRequestBody: Message = {
      content: newMessageContent,
      roomId: room._id,
      userId: this.userService.currentUser._id,
      username: this.userService.currentUser.username,
      dateCreated: new Date()
    };

    return newMessageRequestBody;
  }

}
