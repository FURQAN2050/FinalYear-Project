import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnduserMedicalLikesPage } from './enduser-medical-likes.page';

const routes: Routes = [
  {
    path: '',
    component: EnduserMedicalLikesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnduserMedicalLikesPage]
})
export class EnduserMedicalLikesPageModule {}
