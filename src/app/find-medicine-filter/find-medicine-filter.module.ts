import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FindMedicineFilterPage } from './find-medicine-filter.page';

const routes: Routes = [
  {
    path: '',
    component: FindMedicineFilterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FindMedicineFilterPage]
})
export class FindMedicineFilterPageModule {}
