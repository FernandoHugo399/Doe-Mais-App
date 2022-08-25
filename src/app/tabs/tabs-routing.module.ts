import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'instituicoes',
        loadChildren: () => import('./instituicoes/instituicoes.module').then(m => m.InstituicoesPageModule)
      },
      {
        path: 'contate-nos',
        loadChildren: () => import('./contate-nos/contate-nos.module').then(m => m.ContateNosPageModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
