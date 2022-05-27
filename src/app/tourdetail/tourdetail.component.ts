import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalVariablesService } from "../services/global-variables.service";

@Component({
  selector: "app-tourdetail",
  templateUrl: "./tourdetail.component.html",
  styleUrls: ["./tourdetail.component.css"],
})
export class TourdetailComponent implements OnInit {
  show: string = "Price";
  showloader: boolean = false;
  // activatedRoute: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, public global: GlobalVariablesService) { }

  currentid: any;
  ngOnInit() {
    this.global.currentRoute = this.router.routerState.snapshot.url;
    this.currentid = this.activatedRoute.snapshot.params['countryid'];
    console.log(this.global.currentRoute);
    console.log(this.currentid);

  }

  backtohome() {
    this.router.navigate(["/dashboard"]);
  }

  gotocheckout() {
    this.router.navigate(["/checkout"]);
  }

  showtab(text: any) {
    this.show = text;
  }



}
