import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RoomsComponent,
    RoomsListComponent,
    MessagesComponent
  ]
})
export class RoomsModule { }
