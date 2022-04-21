import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private Router: Router, public global: GlobalVariablesService) { }

  ngOnInit() {
    this.global.currentRoute = this.Router.routerState.snapshot.url
  }


  gotoDashboard() {
    this.Router.navigate(['/dashboard']);
  }
  gotologinpage() {
    this.Router.navigate(['/login']);
  }
}
