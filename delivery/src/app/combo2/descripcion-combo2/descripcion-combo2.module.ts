import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionCombo2PageRoutingModule } from './descripcion-combo2-routing.module';

import { DescripcionCombo2Page } from './descripcion-combo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionCombo2PageRoutingModule
  ],
  declarations: [DescripcionCombo2Page]
})
export class DescripcionCombo2PageModule {}
