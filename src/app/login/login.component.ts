import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public global: GlobalVariablesService) { }

  ngOnInit() {
    this.global.currentRoute = this.router.routerState.snapshot.url
  }

  gotodashboard() {
    this.router.navigate(['/dashboard'])
  }

}
