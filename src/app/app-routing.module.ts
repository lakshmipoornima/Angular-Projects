import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'productlist', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }, 
{ path: 'canvas', loadChildren: () => import('./drawpolygon/drawpolygon.module').then(m => m.DrawpolygonModule) },
{ path: 'calculator', loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
