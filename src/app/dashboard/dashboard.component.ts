import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  search: any;
  show: String = 'tourlist'
  tourData = [
    {
      placename: "The Baku ",
      country: "Azerbaijan",
      image: "../../assets/images/baku.png"
    },
    {
      placename: "The Instanbul",
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

  hotelData = [
    {
      placename: "The Hotel ",
      country: "Azerbaijan",
      image: "../../assets/images/hotel1.jpg"
    },
    {
      placename: "The Instanbul",
      country: "Turkey",
      image: "../../assets/images/hotel2.png"
    },
    {
      placename: "The Maldive",
      country: "Maldive",
      image: "../../assets/images/hotel3.png"
    },
    {
      placename: "The Germany",
      country: "Germany",
      image: "../../assets/images/hotel4.png"
    },
    {
      placename: "The tree sunset",
      country: "Greece",
      image: "../../assets/images/hotel5.jpg"
    }
  ];


  ngOnInit() {
  }
  gotodetail() {
    // tourdetail
    this.router.navigate(['/tourdetail']);
  }

  gototourdata(text: any) {
    this.show = text;
  }
  // showtab(text:any) {
  //   this.show = text
  // }
}
