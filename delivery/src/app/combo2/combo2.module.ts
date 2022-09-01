import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Combo2PageRoutingModule } from './combo2-routing.module';

import { Combo2Page } from './combo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Combo2PageRoutingModule
  ],
  declarations: [Combo2Page]
})
export class Combo2PageModule {}
