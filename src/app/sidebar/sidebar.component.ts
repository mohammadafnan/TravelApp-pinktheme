import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})
export class SidebarComponent implements OnInit {
  // sidebarshow: boolean = false;
  // @Input() show: boolean = false;
  @Input() showname: string;

  constructor(private router: Router, public global: GlobalVariablesService) { }


  ngOnInit() {
    console.log(this.showname);
  }
  gotologout() {
    this.router.navigate(["/"]);

  }

  gotohome() {
    this.router.navigate(["/dashboard"]);
    this.global.showSideBar = false
  }
  toggleSideBar() {
    this.global.showSideBar = !this.global.showSideBar
  }

}
