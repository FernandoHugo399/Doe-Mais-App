import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituicoesPage } from './instituicoes.page';

const routes: Routes = [
  {
    path: '',
    component: InstituicoesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituicoesPageRoutingModule {}
