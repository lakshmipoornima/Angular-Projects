import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { 
    path: '', 
  component: ProductComponent
   },
  {
    path:"cart",
    component:CartlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
