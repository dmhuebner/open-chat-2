import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserToRoomModalComponent } from './add-user-to-room-modal.component';

describe('AddUserToRoomModalComponent', () => {
  let component: AddUserToRoomModalComponent;
  let fixture: ComponentFixture<AddUserToRoomModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserToRoomModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserToRoomModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
