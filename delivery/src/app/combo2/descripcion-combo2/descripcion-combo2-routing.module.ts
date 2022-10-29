import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionCombo2Page } from './descripcion-combo2.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionCombo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionCombo2PageRoutingModule {}
