import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  tourData = [
    {
      placename: "The Baku ",
      country: "Azerbaijan",
      image: "../../assets/images/baku.png"
    },
    {
      placename: "The Sultan Mosque",
      country: "Turkey",
      image: "../../assets/images/turkey.png"
    },
    {
      placename: "The Maldive",
      country: "Maldive",
      image: "../../assets/images/maldive.png"
    },
    {
      placename: "The Germany",
      country: "Germany",
      image: "../../assets/images/Germany.png"
    },
    {
      placename: "The tree sunset",
      country: "Greece",
      image: "../../assets/images/pexels-travel1.jpg"
    }
  ];


  ngOnInit() {
  }

}
