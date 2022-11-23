import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { ControlsComponent} from './controls.component'
import { ControlModule } from '../control/control.module';
import { ControlVolumeModule } from '../control-volume/control-volume.module';
import { TimeModule } from '../time/time.module';
import { ProgressBarModule } from '../progress-bar/progressbar.module';

const routes: Routes = [
  {
    path: '',
    component: ControlsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ControlModule,
    ControlVolumeModule,
    TimeModule,
    ProgressBarModule
  ],
  declarations: [ControlsComponent],
  exports: [ControlsComponent]
})
export class ControlsModule {}