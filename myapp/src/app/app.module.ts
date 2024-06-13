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
@NgModule({
  declarations: [
    AppComponent,
    DatabindindComponent,
    DirevtiveComponent,
    MypipeComponent,
    CubePipe,
    SquarePipe,
    AreaOfcirclePipe,
    EmpDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
