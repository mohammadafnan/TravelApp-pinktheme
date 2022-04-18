import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }
  search: any;
  sidebarshow: boolean = false;
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

  ngOnInit() { }


  gotodetail() {
    this.router.navigate(["/tourdetail"]);
  }


  gotologout() {
    this.router.navigate(["/"]);

  }

  gototourdata(text: any) {
    this.show = text;
  }
  showsidebar() {
    this.sidebarshow = !this.sidebarshow;
  }
}
