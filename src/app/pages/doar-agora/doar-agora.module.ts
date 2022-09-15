import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoarAgoraPageRoutingModule } from './doar-agora-routing.module';

import { DoarAgoraPage } from './doar-agora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoarAgoraPageRoutingModule
  ],
  declarations: [DoarAgoraPage]
})
export class DoarAgoraPageModule {}
