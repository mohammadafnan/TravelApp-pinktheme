import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourdetail',
  templateUrl: './tourdetail.component.html',
  styleUrls: ['./tourdetail.component.css']
})
export class TourdetailComponent implements OnInit {

  constructor(private router: Router) { }
  tourdetail = [
    {
      lable: "The Instanbul Turkey!",
      rating: "4.5",
      image: "../../assets/images/turkey.png"
    },
    {
      lable: "The Instanbul Turkey!",
      rating: "4.5",
      image: "../../assets/images/baku.png"
    }, {
      lable: "The Instanbul<br> Turkey!",
      rating: "4.5",
      image: "../../assets/images/Germany.png"
    }, {
      lable: "The Instanbul<br> Turkey!",
      rating: "4.5",
      image: "../../assets/images/maldive.png"
    }, {
      lable: "The Instanbul<br> Turkey!",
      rating: "4.5",
      image: "../../assets/images/pexels-travel1.jpg"
    }
  ]


  ngOnInit() {
  }

  backtohome() {
    this.router.navigate(['/dashboard'])
  }
}
