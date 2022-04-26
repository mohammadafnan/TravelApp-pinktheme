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
  tourdatacopy: any[];
  hoteldatacopy: any[];
  busdatacopy: any[];
  constructor(private router: Router, public global: GlobalVariablesService) { }
  search: any;
  showloader: boolean = false;
  show: String = "tourlist";
  tourData = [
    {
      id: 1,
      placename: "The Baku ",
      country: "Azerbaijan",
      image: "../../assets/images/baku.png",
    },
    {
      id: 3,
      placename: "The Instanbul",
      country: "Turkey",
      image: "../../assets/images/turkey.png",
    },
    {
      id: 3,
      placename: "The Maldive",
      country: "Maldive",
      image: "../../assets/images/maldive.png",
    },
    {
      id: 2,
      placename: "The Germany",
      country: "Germany",
      image: "../../assets/images/Germany.png",
    },
    {
      id: 2,
      placename: "The tree sunset",
      country: "Greece",
      image: "../../assets/images/pexels-travel1.jpg",
    },
  ];

  hotelData = [
    {
      id: 1,
      placename: "The Hotel ",
      country: "Azerbaijan",
      image: "../../assets/images/hotel1.jpg",
    },
    {
      id: 2,
      placename: "The Hotel",
      country: "Turkey",
      image: "../../assets/images/hotel2.jpg",
    },
    {
      id: 2,
      placename: "The Hotel",
      country: "Maldive",
      image: "../../assets/images/hotel3.jpg",
    },
    {
      id: 3,
      placename: "The Hotel",
      country: "Germany",
      image: "../../assets/images/hotel4.jpg",
    },
    {
      id: 3,
      placename: "The Hotel",
      country: "Greece",
      image: "../../assets/images/hotel5.jpg",
    },
  ];
  busData = [
    {
      id: 1,
      placename: "The Bus ",
      country: "Daewoo 1",
      image: "../../assets/images/bus1.jpeg",
    },
    {
      id: 2,
      placename: "The Bus",
      country: "Daewoo 2",
      image: "../../assets/images/bus2.jpeg",
    },
    {
      id: 2,
      placename: "The Bus",
      country: "Daewoo 3",
      image: "../../assets/images/bus3.jpeg",
    },
    {
      id: 3,
      placename: "The Bus",
      country: "Daewoo 4",
      image: "../../assets/images/bus4.jpeg",
    },
    {
      id: 3,
      placename: "The Bus",
      country: "Daewoo 5",
      image: "../../assets/images/bus5.jpeg",
    },
  ];

  ngOnInit() {
    this.global.currentRoute = this.router.routerState.snapshot.url
    this.tourdatacopy = Object.assign([], this.tourData);
    this.hoteldatacopy = Object.assign([], this.hotelData);
    this.busdatacopy = Object.assign([], this.busData);
  }


  gotodetail() {
    this.showloader = true;
    setTimeout(() => {
      this.router.navigate(["/tourdetail"]);
    }, 1000);
    // this.router.navigate(["/tourdetail"]);
  }

  showsidebar() {
    this.sidebarshow = !this.sidebarshow;
  }

  gototourdata(text: any) {
    this.show = text;
  }

  tab(newid: any) {

    if (newid == -1) {
      this.tourData = this.tourdatacopy;
      this.hotelData = this.hoteldatacopy;
      this.busData = this.busdatacopy;

      return;
    }

    this.tourData = this.tourdatacopy;
    this.hotelData = this.hoteldatacopy;
    this.busData = this.busdatacopy;
    this.showloader = true;

    let data = this.tourData.filter(a => a.id == newid);
    // let data1 = this.hotelData.filter(a => a.id == newid);
    // let data2 = this.busData.filter(a => a.id == newid);

    setTimeout(() => {
      this.showloader = false;

    }, 300);

    this.tourData = data;
    // this.hotelData = data1;
    // this.busData = data2;


  }


}
