import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
// import { NgChartsModule } from 'ng2-charts';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],
  declarations: [ComponentsComponent, ProfileComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
  ],
  providers: [DatePipe]
})
export class ComponentsModule { }
