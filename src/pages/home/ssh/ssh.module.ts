import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SshPage } from './ssh';

@NgModule({
  declarations: [
    SshPage,
  ],
  imports: [
    IonicPageModule.forChild(SshPage),
  ],
  exports: [
    SshPage
  ]
})
export class SshPageModule {}
