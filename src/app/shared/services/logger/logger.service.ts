import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class LoggerService {

  constructor(private toastr: ToastrService) { }

  success(title: string, message?: string): void {
    this.toastr.success(message, title);
  }

  error(title: string, message?: string, error?: object): void {
    console.log(error);
    this.toastr.error(message, title);
  }
}
