import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CheckoutComponent } from "./checkout/checkout.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { TourdetailComponent } from "./tourdetail/tourdetail.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: LoginpageComponent },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "tourdetail/:countryid", component: TourdetailComponent },
  { path: "checkout", component: CheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
