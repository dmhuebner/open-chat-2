import { TestBed, inject } from '@angular/core/testing';

import { UrlBuilderService } from './url-builder.service';
import { Constants } from '../../../constants';

describe('UrlBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UrlBuilderService,
        Constants
      ]
    });
  });

  it('should be created', inject([UrlBuilderService], (service: UrlBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
