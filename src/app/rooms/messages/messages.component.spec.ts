import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponent } from './messages.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../shared/services/message/message.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlBuilderService } from '../../shared/services/urlBuilder/url-builder.service';
import { Constants } from '../../constants';
import { UserService } from '../../shared/services/user/user.service';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        MessageService,
        HttpClient,
        HttpHandler,
        UrlBuilderService,
        Constants,
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
