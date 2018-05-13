import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from '../materialize/materialize.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlBuilderService } from '../shared/services/urlBuilder/url-builder.service';
import { Constants } from '../constants';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user/user.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MaterializeModule,
        BrowserAnimationsModule
      ],
      declarations: [
        HomeComponent,
        LoginComponent,
        SignupComponent
      ],
      providers: [
        AuthService,
        HttpClient,
        HttpHandler,
        UrlBuilderService,
        Constants,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
