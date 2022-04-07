import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TourdetailComponent } from './tourdetail/tourdetail.component';

const routes: Routes = [
  { path: '', component: LoginpageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tourdetail', component: TourdetailComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
