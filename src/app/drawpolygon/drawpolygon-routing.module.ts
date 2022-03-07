import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawpolygonComponent } from './drawpolygon.component';

const routes: Routes = [
  { path: '',
   component: DrawpolygonComponent,
   }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawpolygonRoutingModule { }
