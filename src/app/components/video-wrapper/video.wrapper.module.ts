import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { VideoWrapperComponent} from './video-wrapper.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    component: VideoWrapperComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule
  ],
  declarations: [VideoWrapperComponent],
  exports: [VideoWrapperComponent]
})
export class VideoWrapperModule {}