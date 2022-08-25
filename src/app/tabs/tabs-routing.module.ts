import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('./home/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./instituicoes/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'contate-nos',
        loadChildren: () => import('./contate-nos/contate-nos.module').then(m => m.ContateNosPageModule)
      },
      {
        path: '',
        redirectTo: '/tab1',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
