import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Combo2Page } from './combo2.page';

const routes: Routes = [
  {
    path: '',
    component: Combo2Page
  },
  {
    path: ':productoID',
    loadChildren: () => import('./descripcion-combo2/descripcion-combo2.module').then( m => m.DescripcionCombo2PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Combo2PageRoutingModule {}
