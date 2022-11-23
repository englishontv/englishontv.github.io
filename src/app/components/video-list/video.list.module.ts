import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { VideoListComponent} from './video-list.component'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatSlideToggleModule,
    MatListModule
  ],
  declarations: [VideoListComponent],
  exports: [VideoListComponent]
})
export class VideoListModule {}