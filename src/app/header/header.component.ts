import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public global: GlobalVariablesService) { }

  ngOnInit() {
  }
  toggleSideBar() {
    this.global.showSideBar = !this.global.showSideBar
  }

  backtohome() {
    this.router.navigate(["/dashboard"])
  }
}
