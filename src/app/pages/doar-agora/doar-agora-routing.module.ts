import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoarAgoraPage } from './doar-agora.page';

const routes: Routes = [
  {
    path: '',
    component: DoarAgoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoarAgoraPageRoutingModule {}
