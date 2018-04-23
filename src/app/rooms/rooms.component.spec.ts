import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { UserService } from '../services/user/user.service';
import { User } from '../interfaces/user';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;
  const user: User = {
    username: 'Username',
    email: 'test@email.com',
    id: '123abc'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsComponent ],
      providers: [
        UserService
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
