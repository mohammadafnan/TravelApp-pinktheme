import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalVariablesService } from "../services/global-variables.service";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],

})

export class DashboardComponent implements OnInit {
  sidebarshow: boolean = false;
  constructor(private router: Router, public global: GlobalVariablesService) { }
  search: any;
  showloader: boolean = false;
  show: String = "tourlist";
  tourData = [
    {
      placename: "The Baku ",
      country: "Azerbaijan",
      image: "../../assets/images/baku.png",
    },
    {
      placename: "The Instanbul",
      country: "Turkey",
      image: "../../assets/images/turkey.png",
    },
    {
      placename: "The Maldive",
      country: "Maldive",
      image: "../../assets/images/maldive.png",
    },
    {
      placename: "The Germany",
      country: "Germany",
      image: "../../assets/images/Germany.png",
    },
    {
      placename: "The tree sunset",
      country: "Greece",
      image: "../../assets/images/pexels-travel1.jpg",
    },
  ];

  hotelData = [
    {
      placename: "The Hotel ",
      country: "Azerbaijan",
      image: "../../assets/images/hotel1.jpg",
    },
    {
      placename: "The Hotel",
      country: "Turkey",
      image: "../../assets/images/hotel2.jpg",
    },
    {
      placename: "The Hotel",
      country: "Maldive",
      image: "../../assets/images/hotel3.jpg",
    },
    {
      placename: "The Hotel",
      country: "Germany",
      image: "../../assets/images/hotel4.jpg",
    },
    {
      placename: "The Hotel",
      country: "Greece",
      image: "../../assets/images/hotel5.jpg",
    },
  ];
  busData = [
    {
      placename: "The Bus ",
      country: "Daewoo 1",
      image: "../../assets/images/bus1.jpeg",
    },
    {
      placename: "The Bus",
      country: "Daewoo 2",
      image: "../../assets/images/bus2.jpeg",
    },
    {
      placename: "The Bus",
      country: "Daewoo 3",
      image: "../../assets/images/bus3.jpeg",
    },
    {
      placename: "The Bus",
      country: "Daewoo 4",
      image: "../../assets/images/bus4.jpeg",
    },
    {
      placename: "The Bus",
      country: "Daewoo 5",
      image: "../../assets/images/bus5.jpeg",
    },
  ];

  ngOnInit() {
    this.global.currentRoute = this.router.routerState.snapshot.url
  }


  gotodetail() {
    this.showloader = true;
    setTimeout(() => {
      this.router.navigate(["/tourdetail"]);
    }, 2000);
    // this.router.navigate(["/tourdetail"]);
  }

  showsidebar() {
    this.sidebarshow = !this.sidebarshow;
  }

  gototourdata(text: any) {
    this.show = text;
  }

}
