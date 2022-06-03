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
  pritbn: any;

  // activatedRoute: any;
  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public global: GlobalVariablesService
  ) { }

  currentid: any;
  ngOnInit() {
    this.global.isHidden = true
    this.global.isShowprofile = false
    this.global.currentRoute = this.router.routerState.snapshot.url;
    this.currentid = this.activatedRoute.snapshot.params["countryid"];
    this.global.cityCopy = this.global.city;





  }

  backtohome() {
    this.router.navigate(["/dashboard"]);
  }

  gotocheckout() {
    this.global.isHidden = false
    this.global.isHidden1 = true

    this.router.navigate(["/checkout"]);
  }

  showtab(text: any) {
    this.show = text;
  }

  showPrice(i) {
    this.pritbn = i;
    // alert(i);
  }
}
