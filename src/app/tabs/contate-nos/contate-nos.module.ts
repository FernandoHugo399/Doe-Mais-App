import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContateNosPage } from './contate-nos.page';
import { ContateNosPageRoutingModule } from './contate-nos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ContateNosPage }]),
    ContateNosPageRoutingModule,
  ],
  declarations: [ContateNosPage]
})
export class ContateNosPageModule {}
