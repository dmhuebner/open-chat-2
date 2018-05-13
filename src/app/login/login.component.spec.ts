import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user/user.service';
import { UrlBuilderService } from '../shared/services/urlBuilder/url-builder.service';
import { Constants } from '../constants';
import { MaterializeModule } from '../materialize/materialize.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        MaterializeModule,
        BrowserAnimationsModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        AuthService,
        UserService,
        UrlBuilderService,
        Constants,
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
