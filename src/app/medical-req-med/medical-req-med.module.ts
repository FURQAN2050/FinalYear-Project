import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicalReqMedPage } from './medical-req-med.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalReqMedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicalReqMedPage]
})
export class MedicalReqMedPageModule {}
