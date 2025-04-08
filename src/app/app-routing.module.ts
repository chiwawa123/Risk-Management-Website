import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { StaffComponent } from './components/staff/staff.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'staff',component:StaffComponent},
  {path:'about',component:AboutComponent},
  {path:'downloads',component:DownloadsComponent},
  {path:'contact',component:ContactComponent},
  {path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
