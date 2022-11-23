import { NgModule } from '@angular/core';
import { ControlModule } from '../control/control.module';

import { TimeComponent } from './time.component';

@NgModule({
  declarations: [
    TimeComponent

  ],
  imports: [],
  bootstrap: [TimeComponent],
  exports: [TimeComponent]
})
export class TimeModule { }