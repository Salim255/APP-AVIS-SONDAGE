import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
//imports: [NgbRatingModule ]
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  /*   {
    path: '',
    redirectTo: 'sondages',
    pathMatch: 'full',
  }, */
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'avis',
    loadChildren: () =>
      import('./home/avis/avis.module').then((m) => m.AvisPageModule),
  },

  {
    path: 'sondages',
    loadChildren: () =>
      import('./home/sondages/sondages.module').then(
        (m) => m.SondagesPageModule
      ),
  },
  /*   {
    path: '',
    redirectTo: '/home/tabs/sondage',
    pathMatch: 'full',
  }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    NgbRatingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
