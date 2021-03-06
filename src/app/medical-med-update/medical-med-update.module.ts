import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicalMedUpdatePage } from './medical-med-update.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalMedUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicalMedUpdatePage]
})
export class MedicalMedUpdatePageModule {}
