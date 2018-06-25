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

  createNewRoom(newRoom: Room) {
    const request = this.createNewRoomRequest(newRoom);
    const url = this.urlBuilder.openChatAPI('rooms');
    const authToken = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + authToken
      })
    };

    return this.http.post<Room[]>(url, request, httpOptions);
  }

  private createNewRoomRequest(newRoom: Room): Room {
    const newRoomRequestBody = newRoom;
    newRoomRequestBody.userIds = [newRoom.roomOwnerId];

    return newRoomRequestBody;
  }
}
