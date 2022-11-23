import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ChannelsComponent } from './channels.component';
import { ControlsModule } from '../components/controls/controls.module';
import { VideoWrapperModule } from '../components/video-wrapper/video.wrapper.module';
import { VideoListModule } from '../components/video-list/video.list.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

const routes: Routes = [
  {
    path: '',
    component: ChannelsComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ControlsModule,
    VideoWrapperModule,
    VideoListModule
  ],
  declarations: [ChannelsComponent],
  exports: [ChannelsComponent],
  bootstrap: [ChannelsComponent]
})
export class ChannelsModule {}