import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlBuilderService } from '../urlBuilder/url-builder.service';
import { User } from '../../interfaces/user';
import { Room } from '../../interfaces/room';
import { Message } from '../../interfaces/message';

@Injectable()
export class RoomService {

  constructor(private http: HttpClient,
              private urlBuilder: UrlBuilderService) { }

  getUsersRooms(user: User) {
      const url = this.urlBuilder.openChatAPI('rooms') + '?userId=' + user._id;
      const authToken = localStorage.getItem('authToken');
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + authToken
        })
      };

      return this.http.get<Room[]>(url, httpOptions);
  }

  getMessagesByRoom(roomId: String) {
    const url = this.urlBuilder.openChatAPI('rooms') + `/${roomId}/messages`;
    const authToken = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + authToken
      })
    };

    return this.http.get<Message[]>(url, httpOptions);
  }
}
