import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SondagesPage } from './sondages.page';

const routes: Routes = [
  {
    path: '',
    component: SondagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SondagesPageRoutingModule {}
