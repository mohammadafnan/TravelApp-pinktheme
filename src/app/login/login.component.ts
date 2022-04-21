import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariablesService } from '../services/global-variables.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public profileForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, public global: GlobalVariablesService) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })

  }


  ngOnInit() {
    this.global.currentRoute = this.router.routerState.snapshot.url
  }

  gotodashboard() {
    this.router.navigate(['/dashboard'])
  }

}
