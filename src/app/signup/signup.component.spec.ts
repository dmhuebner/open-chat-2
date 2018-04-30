import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UrlBuilderService } from '../shared/services/urlBuilder/url-builder.service';
import { Constants } from '../constants';
import { UserService } from '../shared/services/user/user.service';
import { Router } from '@angular/router';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [ SignupComponent ],
      providers: [
        AuthService,
        UrlBuilderService,
        Constants,
        UserService,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
