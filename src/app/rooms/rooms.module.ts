import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { MessagesComponent } from './messages/messages.component';
import { NewRoomModalComponent } from './new-room-modal/new-room-modal.component';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from '../materialize/materialize.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AddUserToRoomModalComponent } from './add-user-to-room-modal/add-user-to-room-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule
  ],
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    MessagesComponent,
    NewRoomModalComponent,
    AddUserToRoomModalComponent
  ]
})
export class RoomsModule { }
