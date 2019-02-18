import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicalMedAddPage } from './medical-med-add.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalMedAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicalMedAddPage]
})
export class MedicalMedAddPageModule {}
