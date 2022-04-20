import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public global: GlobalVariablesService) { }

  ngOnInit() {
  }
  toggleSideBar() {
    this.global.showSideBar = !this.global.showSideBar
  }
}
