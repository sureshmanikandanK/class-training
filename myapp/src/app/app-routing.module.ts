import { NgModule } from '@angular/core';
import { RedirectCommand, RouterModule, Routes } from '@angular/router';
import { DatabindindComponent } from './components/databindind/databindind.component';
import path from 'path';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { ProductDashboardComponent } from './curd/product-dashboard/product-dashboard.component';
import { ProductAddComponent } from './curd/product-add/product-add.component';
import { ProductUpdateComponent } from './curd/product-update/product-update.component';


const routes: Routes = [
  // default routing
  { path: "maindashboard", component: MainDashboardComponent,children:[
    // Redirect routing
  {path:"",redirectTo:"databinding",pathMatch:"full"},

  // naming routing

  { path: "databinding", component: DatabindindComponent },

  // parametrize rounting

  { path: "empdetails/:id", component: EmpDetailsComponent },
  { path: "Foodlist", component:FoodListComponent },
  { path: "Productdash", component: ProductDashboardComponent },
  { path: "ProductAdd", component: ProductAddComponent },
  { path: "ProductUpdate/:id", component: ProductUpdateComponent },

  //child routing
  { path: "angform", component: AngFormComponent, children:[
    {path:"rtf",component:RtfComponent},
    {path:"utdf",component:UtdfComponent},
  ] },
  { path: "empdetails/:id", component: EmpDetailsComponent },

  ] },
  

  // wild card rounting
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
