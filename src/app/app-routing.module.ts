
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
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'view-medical/:storeId', loadChildren: './view-medical/view-medical.module#ViewMedicalPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'medical-store', loadChildren: './medical-store/medical-store.module#MedicalStorePageModule' },
  { path: 'add-medicine', loadChildren: './add-medicine/add-medicine.module#AddMedicinePageModule' },
  { path: 'medicine-list', loadChildren: './medicine-list/medicine-list.module#MedicineListPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: 'medical-med-add', loadChildren: './medical-med-add/medical-med-add.module#MedicalMedAddPageModule' },
  { path: 'medical-req-med', loadChildren: './medical-req-med/medical-req-med.module#MedicalReqMedPageModule' },
  { path: 'medical-med-list', loadChildren: './medical-med-list/medical-med-list.module#MedicalMedListPageModule' },
  { path: 'medical-med-update', loadChildren: './medical-med-update/medical-med-update.module#MedicalMedUpdatePageModule' },
  { path: 'super-med-list', loadChildren: './super-med-list/super-med-list.module#SuperMedListPageModule' },
  { path: 'super-med-update', loadChildren: './super-med-update/super-med-update.module#SuperMedUpdatePageModule' },
  { path: 'super-med-req-ap', loadChildren: './super-med-req-ap/super-med-req-ap.module#SuperMedReqApPageModule' },
  { path: 'super-medical-list', loadChildren: './super-medical-list/super-medical-list.module#SuperMedicalListPageModule' },
  { path: 'enduser-medical-likes', loadChildren: './enduser-medical-likes/enduser-medical-likes.module#EnduserMedicalLikesPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
