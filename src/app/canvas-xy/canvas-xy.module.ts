import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanvasXyPageRoutingModule } from './canvas-xy-routing.module';

import { CanvasXyPage } from './canvas-xy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanvasXyPageRoutingModule
  ],
  declarations: [CanvasXyPage]
})
export class CanvasXyPageModule {}
