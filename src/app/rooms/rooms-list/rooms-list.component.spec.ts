import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsListComponent } from './rooms-list.component';
import { RoomService } from '../../shared/services/room/room.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlBuilderService } from '../../shared/services/urlBuilder/url-builder.service';
import { Constants } from '../../constants';

describe('RoomsListComponent', () => {
  let component: RoomsListComponent;
  let fixture: ComponentFixture<RoomsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsListComponent],
      providers: [
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
    fixture = TestBed.createComponent(RoomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
