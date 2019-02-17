import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },  { path: 'view-medical', loadChildren: './view-medical/view-medical.module#ViewMedicalPageModule' },
  { path: 'medicine-list', loadChildren: './medicine-list/medicine-list.module#MedicineListPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
