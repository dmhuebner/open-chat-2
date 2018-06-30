import { TestBed, inject } from '@angular/core/testing';
import { MessageService } from './message.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlBuilderService } from '../urlBuilder/url-builder.service';
import { Constants } from '../../../constants';
import { UserService } from '../user/user.service';

describe('MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MessageService,
        HttpClient,
        HttpHandler,
        UrlBuilderService,
        Constants,
        UserService
      ]
    });
  });

  it('should be created', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
