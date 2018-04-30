import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlBuilderService } from '../urlBuilder/url-builder.service';

@Injectable()
export class RoomService {

  constructor(private http: HttpClient,
              private urlBuilder: UrlBuilderService) { }


  getAllRooms() {
    const url = this.urlBuilder.openChatAPI('rooms');
    const authToken = localStorage.getItem('authToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + authToken
      })
    };

    console.log('url', url);
    console.log('httpOptions', httpOptions);
    return this.http.get(url, httpOptions);
  }
}
