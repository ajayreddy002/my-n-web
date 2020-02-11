import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetintouchRoutingModule } from './getintouch-routing.module';
import { GetintouchComponent } from './getintouch.component';


@NgModule({
  declarations: [
    GetintouchComponent
  ],
  imports: [
    CommonModule,
    GetintouchRoutingModule
  ]
})
export class GetintouchModule { }
