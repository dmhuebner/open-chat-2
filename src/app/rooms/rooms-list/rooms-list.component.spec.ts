import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomsListComponent } from './rooms-list.component';
import { RoomService } from '../../shared/services/room/room.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlBuilderService } from '../../shared/services/urlBuilder/url-builder.service';
import { Constants } from '../../constants';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { MaterializeModule } from '../../materialize/materialize.module';
import { UserService } from '../../shared/services/user/user.service';

describe('RoomsListComponent', () => {
  let component: RoomsListComponent;
  let fixture: ComponentFixture<RoomsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoomsListComponent],
      imports: [MaterializeModule],
      providers: [
        RoomService,
        HttpClient,
        HttpHandler,
        UrlBuilderService,
        Constants,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        MatDialog,
        UserService
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
