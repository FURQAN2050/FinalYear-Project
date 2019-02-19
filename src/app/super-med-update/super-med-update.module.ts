import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SuperMedUpdatePage } from './super-med-update.page';

const routes: Routes = [
  {
    path: '',
    component: SuperMedUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuperMedUpdatePage]
})
export class SuperMedUpdatePageModule {}
