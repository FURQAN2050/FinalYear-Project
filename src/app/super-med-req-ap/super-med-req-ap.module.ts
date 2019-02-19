import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuperMedReqApPage } from './super-med-req-ap.page';

const routes: Routes = [
  {
    path: '',
    component: SuperMedReqApPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuperMedReqApPage]
})
export class SuperMedReqApPageModule {}
