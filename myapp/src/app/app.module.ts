import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindindComponent } from './components/databindind/databindind.component';
import { DirevtiveComponent } from './components/direvtive/direvtive.component';
import { FormsModule } from '@angular/forms';
import { MypipeComponent } from './components/mypipe/mypipe.component';
import { CubePipe } from './shared/custompipe/cube.pipe';
import { SquarePipe } from './shared/custompipe/square.pipe';
import { AreaOfcirclePipe } from './shared/custompipe/area-ofcircle.pipe';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { ToggleimageComponent } from './Task/toggleimage/toggleimage.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { TogImageComponent } from './Eswar/tog-image/tog-image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodListComponent } from './components/food-list/food-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDashboardComponent } from './curd/product-dashboard/product-dashboard.component';
import { ProductAddComponent } from './curd/product-add/product-add.component';
import { ProductUpdateComponent } from './curd/product-update/product-update.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MyangularMaterialComponent } from './components/myangular-material/myangular-material.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { SignoutComponent } from './components/signout/signout.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindindComponent,
    DirevtiveComponent,
    MypipeComponent,
    CubePipe,
    SquarePipe,
    AreaOfcirclePipe,
    EmpDetailsComponent,
    ToggleimageComponent,
    AngFormComponent,
    RtfComponent,
    UtdfComponent,
    PagenotfoundComponent,
    MainDashboardComponent,
    NavComponent,
    FooterComponent,
    TogImageComponent,
    FoodListComponent,
    ProductDashboardComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    MyangularMaterialComponent,
    LoginComponent,
    SignoutComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
