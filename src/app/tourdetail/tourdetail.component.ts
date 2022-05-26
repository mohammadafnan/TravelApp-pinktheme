import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalVariablesService } from "../services/global-variables.service";

@Component({
  selector: "app-tourdetail",
  templateUrl: "./tourdetail.component.html",
  styleUrls: ["./tourdetail.component.css"],
})
export class TourdetailComponent implements OnInit {
  show: string = "Price";
  constructor(private router: Router, public global: GlobalVariablesService) { }
  city = [
    {
      id: 1,
      countryId: 1,
      name: "The Baku City1!",
      rating: "4.5",
      image: "../../assets/images/turkey.png",
    },
    {
      id: 2,
      countryId: 1,
      name: "The Baku City2!",
      rating: "4.5",
      image: "../../assets/images/turkey.png",
    },
    {
      id: 3,
      countryId: 1,
      name: "The Baku City3!",
      rating: "4.5",
      image: "../../assets/images/turkey.png",
    },
    {
      id: 4,
      countryId: 2,
      name: "The Instanbul Turkey1!",
      rating: "4.5",
      image: "../../assets/images/baku.png",
    },
    {
      id: 5,
      countryId: 2,
      name: "The Instanbul Turkey2!",
      rating: "4.5",
      image: "../../assets/images/Germany.png",
    },
    {
      id: 6,
      countryId: 2,
      name: "The Instanbul Turkey3!",
      rating: "4.5",
      image: "../../assets/images/maldive.png",
    },
    {
      id: 7,
      countryId: 2,
      name: "The Instanbul Turkey!",
      rating: "4.5",
      image: "../../assets/images/pexels-travel1.jpg",
    },
    {
      id: 8,
      countryId: 3,
      name: "The Maldives city1!",
      rating: "4.5",
      image: "../../assets/images/pexels-travel1.jpg",
    },
    {
      id: 9,
      countryId: 3,
      name: "The Maldives city2!",
      rating: "4.5",
      image: "../../assets/images/pexels-travel1.jpg",
    },
  ];

  ngOnInit() {
    this.global.currentRoute = this.router.routerState.snapshot.url;
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
