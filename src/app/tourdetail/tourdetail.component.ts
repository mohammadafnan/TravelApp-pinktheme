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
  pricityprice: any;
  pricityname: any;
  pricountryname: any;
  countryname: any;
  cityName: any;
  cityPrice: any;
  ticket: any;
  tickerclassname: any;
  adultqty: any;

  // activatedRoute: any;
  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public global: GlobalVariablesService
  ) { }

  currentid: any;
  ngOnInit() {

    this.global.ishistory = false;
    this.global.isHidden = true;
    this.global.isShowprofile = false;
    this.global.isHidden1 = false;
    this.global.currentRoute = this.router.routerState.snapshot.url;
    // this.currentid = this.activatedRoute.snapshot.params["countryid"];
    // this.global.cityCopy = this.global.city;
    // console.log(this.global.cityCopy, "city data");
  }

  backtohome() {
    this.router.navigate(["/dashboard"]);
  }

  gotocheckout() {
    this.global.isHidden = false;
    this.global.isHidden1 = true;
    this.global.ishistory = false;
    // this.showPrice();
    // this.pricountryname = this.countryname;
    // this.pricityname = this.cityName;
    // this.pricityprice = this.cityPrice;
    // console.log(this.pricityname + " Selected city name go to checkout");
    // console.log(this.pricityprice + " Selected city price go to checkout");
    // console.log(this.pricountryname + " Selected country name go to checkout");
    this.router.navigate(["/checkout"]);
  }

  showtab(text: any) {
    this.show = text;
  }

  showPrice(i, cityName, cityPrice, countryname) {
    this.pritbn = i;
    this.pricountryname = countryname;
    this.pricityname = cityName;
    this.pricityprice = cityPrice;
    localStorage.setItem('Selected country name', JSON.stringify(this.pricountryname))
    localStorage.setItem('Selected city name', JSON.stringify(this.pricityname))
    localStorage.setItem('Selected city price', JSON.stringify(this.pricityprice))


    // console.log(this.pritbn + "city all data");
    // console.log(this.pricityname + " Selected city name");
    // console.log(this.pricityprice + " Selected city price");
    // console.log(this.pricountryname + " Selected country name");

    // alert(i);
  }
  ticketClass(i, classname) {
    this.ticket = i;
    this.tickerclassname = classname;
    localStorage.setItem('Selected ticket Class name', JSON.stringify(this.tickerclassname))
    console.log(this.pricityname + " Selected ticket Class name");
  }
  Adultcount = 2;

  incrementAdult(Adultcount) {
    this.adultqty = Adultcount
    localStorage.setItem('Selected Adult Qty', JSON.stringify(this.adultqty))
    // console.log(this.pricityname + " Selected Adult Qty");
    if (this.Adultcount < 6) {
      this.Adultcount++;
    }

  }

  decrementAdult(Adultcount) {
    this.adultqty = Adultcount
    localStorage.setItem('Selected Adult Qty', JSON.stringify(this.adultqty))
    // console.log(this.pricityname + " Selected Adult Qty");
    if (this.Adultcount > 2) {
      this.Adultcount--;
    }
  }

  Childcount = 0;

  incrementChild() {
    if (this.Childcount < 6) {
      this.Childcount++;
    }
  }

  decrementChild() {
    if (this.Childcount > 0) {
      this.Childcount--;
    }
  }
  infantscount = 0;

  incrementinfants() {
    if (this.infantscount < 6) {
      this.infantscount++;
    }
  }

  decrementinfants() {
    if (this.infantscount > 0) {
      this.infantscount--;
    }
  }

}
