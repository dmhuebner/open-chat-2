import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import {UrlBuilderService} from '../urlBuilder/url-builder.service';
import {Constants} from '../../constants';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AuthService,
        UrlBuilderService,
        Constants
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
