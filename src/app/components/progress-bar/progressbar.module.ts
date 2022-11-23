import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { ProgressBarComponent} from './progress-bar.component';
import { MatSliderModule } from '@angular/material/slider';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatSliderModule
  ],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule {}