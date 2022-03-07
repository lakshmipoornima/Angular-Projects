import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawpolygonRoutingModule } from './drawpolygon-routing.module';
import { DrawpolygonComponent } from './drawpolygon.component';


@NgModule({
  declarations: [
    DrawpolygonComponent
  ],
  imports: [
    CommonModule,
    DrawpolygonRoutingModule
  ]
})
export class DrawpolygonModule { }
