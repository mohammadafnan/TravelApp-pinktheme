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
      placename: "The tree sunset",
      country: "Greece",
      image: "../../assets/images/pexels-travel1.jpg"
    },
    {
      placename: "The tree sunset",
      country: "Greece",
      image: "../../assets/images/pexels-travel.jpg"
    },
    {
      placename: "The tree sunset",
      country: "Greece",
      image: "../../assets/images/pexels-travel1.jpg"
    },
    {
      placename: "The tree sunset",
      country: "Greece",
      image: "../../assets/images/pexels-travel.jpg"
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
