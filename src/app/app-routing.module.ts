import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'saiba-mais/:id',
    loadChildren: () => import('./pages/saiba-mais/saiba-mais.module').then( m => m.SaibaMaisPageModule)
  },
  {
    path: 'doar-agora/:id',
    loadChildren: () => import('./pages/doar-agora/doar-agora.module').then( m => m.DoarAgoraPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
