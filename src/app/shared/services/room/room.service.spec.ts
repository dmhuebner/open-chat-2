import { TestBed, inject } from '@angular/core/testing';

import { RoomService } from './room.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UrlBuilderService } from '../urlBuilder/url-builder.service';
import { Constants } from '../../../constants';

describe('RoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoomService,
        HttpClient,
        UrlBuilderService,
        HttpHandler,
        Constants
      ]
    });
  });

  it('should be created', inject([RoomService], (service: RoomService) => {
    expect(service).toBeTruthy();
  }));
});
