import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { UserService } from '../shared/services/user/user.service';
import { User } from '../shared/interfaces/user';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { MessagesComponent } from './messages/messages.component';
import { RoomService } from '../shared/services/room/room.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlBuilderService } from '../shared/services/urlBuilder/url-builder.service';
import { Constants } from '../constants';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;
  const user: User = {
    username: 'Username',
    email: 'test@email.com',
    _id: '123abc',
    admin: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsComponent, RoomsListComponent, MessagesComponent ],
      providers: [
        UserService,
        RoomService,
        HttpClient,
        HttpHandler,
        UrlBuilderService,
        Constants
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component['userService'], 'getUserFromToken').and.returnValue(user);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
