import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-tourdetail',
  templateUrl: './tourdetail.component.html',
  styleUrls: ['./tourdetail.component.css']
})
export class TourdetailComponent implements OnInit {
  show: string = "Price";
  constructor(private router: Router,public global:GlobalVariablesService) { }
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
      lable: "The Instanbul Turkey!",
      rating: "4.5",
      image: "../../assets/images/Germany.png"
    }, {
      lable: "The Instanbul Turkey!",
      rating: "4.5",
      image: "../../assets/images/maldive.png"
    }, {
      lable: "The Instanbul Turkey!",
      rating: "4.5",
      image: "../../assets/images/pexels-travel1.jpg"
    }
  ]


  ngOnInit() {
    this.global.currentRoute = this.router.routerState.snapshot.url
  }

  backtohome() {
    this.router.navigate(['/dashboard'])
  }

  showtab(text:any) {
    this.show = text
  }
}
