import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InstituicoesPage } from './instituicoes.page';

import { InstituicoesPageRoutingModule } from './instituicoes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InstituicoesPageRoutingModule
  ],
  declarations: [InstituicoesPage]
})
export class InstituicoesPageModule {}
