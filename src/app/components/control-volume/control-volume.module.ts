import { NgModule } from '@angular/core';
import { ControlModule } from '../control/control.module';
import { ProgressBarModule } from '../progress-bar/progressbar.module';

import { ControlVolumeComponent } from './control-volume.component';

@NgModule({
  declarations: [
    ControlVolumeComponent

  ],
  imports: [ControlModule, ProgressBarModule],
  bootstrap: [ControlVolumeComponent],
  exports: [ControlVolumeComponent]
})
export class ControlVolumeModule { }