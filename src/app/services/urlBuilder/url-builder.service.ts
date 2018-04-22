import { Injectable } from '@angular/core';
import { Constants } from '../../constants';

@Injectable()
export class UrlBuilderService {

  constructor(private constants: Constants) { }

  openChatAPI(extension): string {
    return this.constants.OpenChatAPIBaseUrl + extension;
  }

}
