import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Combo2Page } from './combo2.page';

const routes: Routes = [
  {
    path: '',
    component: Combo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Combo2PageRoutingModule {}
