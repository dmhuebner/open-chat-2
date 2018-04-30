import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlBuilderService } from './services/urlBuilder/url-builder.service';
import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { Constants } from '../constants';
import { RoomService } from './services/room/room.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService,
    UrlBuilderService,
    Constants,
    UserService,
    RoomService
  ]
})
export class SharedModule { }
