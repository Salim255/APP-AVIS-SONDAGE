import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SondagesPageRoutingModule } from './sondages-routing.module';

import { SondagesPage } from './sondages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SondagesPageRoutingModule
  ],
  declarations: [SondagesPage]
})
export class SondagesPageModule {}
