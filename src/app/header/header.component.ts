import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public global: GlobalVariablesService) { }
  currentid: any;
  ngOnInit() {
    // this.global.currentRoute = this.router.routerState.snapshot.url;
    // this.currentid = this.activatedRoute.snapshot.params['countryid'];
    // console.log(this.global.currentRoute);
    // console.log(this.currentid);
  }
  toggleSideBar() {
    this.global.showSideBar = !this.global.showSideBar
  }

  backtohome() {
    this.router.navigate(["/dashboard"])
  }
  getRoute() {
    if (this.currentid != undefined) {
      console.log('/tourdetail/' + this.currentid)
      return '/tourdetail/' + this.currentid
    }
    else {
      return this.global.currentRoute
    }
  }
}
