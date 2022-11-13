import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'sondages',
        loadChildren: () =>
          import('./sondages/sondages.module').then(
            (m) => m.SondagesPageModule
          ),
      },

      {
        path: 'avis',
        loadChildren: () =>
          import('./avis/avis.module').then((m) => m.AvisPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
