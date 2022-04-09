import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }
  search: any;
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


  ngOnInit() {
  }
gotodetail(){
  // tourdetail
  this.router.navigate(['/tourdetail']);
}
}
