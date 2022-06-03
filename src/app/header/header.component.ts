import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showImage: boolean = true;

  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute, private router: Router, public global: GlobalVariablesService) { }
  currentid: any;
  ngOnInit() {
    // this.global.isHidden = true;

    // this.global.isHidden1 = true
    // this.global.currentRoute = this.router.routerState.snapshot.url;
    // this.currentid = this.activatedRoute.snapshot.params['countryid'];
    // console.log(this.global.currentRoute);
    // console.log(this.currentid);
    // setTimeout(() => {
    //   this.global.newcountryid;
    //   console.log(this.global.newcountryid + "new country id in header");
    // }, 5000);
    // this.global.GetAll();
    // debugger
    // if (this.global.newcountryid && this.global.currentRoute == '/tourdetail/' + this.global.newcountryid
    //   && this.global.currentRoute != '/checkout') {

    //   this.showImage = false;
    // }

    // this.global.newcountryid;
    // console.log(this.global.newcountryid + "new country id in header");

  }
  toggleSideBar() {
    this.global.showSideBar = !this.global.showSideBar
  }

  getCurrentRouteName

  backtohome() {
    this.router.navigate(["/dashboard"])
  }
  // getRoute() {
  //   if (this.currentid != undefined) {
  //     console.log('/tourdetail/' + this.currentid)
  //     return '/tourdetail/' + this.currentid
  //   }
  //   else {
  //     return this.global.currentRoute
  //   }
  // }
}
