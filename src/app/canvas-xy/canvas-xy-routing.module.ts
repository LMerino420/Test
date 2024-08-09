import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanvasXyPage } from './canvas-xy.page';

const routes: Routes = [
  {
    path: '',
    component: CanvasXyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanvasXyPageRoutingModule {}
