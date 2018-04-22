import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [],
  exports: [
    CollapseModule,
    BsDropdownModule
  ]
})
export class BootstrapModule { }
