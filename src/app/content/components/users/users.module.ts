import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../../../theme/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ],
  providers: [DatePipe]
})
export class UsersModule { }
