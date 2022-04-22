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
  logindata = [];

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

  gotodashboard(data) {
    this.router.navigate(['/dashboard'])
    this.global.showSideBar = false
    if (data.name == "afnan" && data.password == 'afnan123') {
      this.logindata.push(this.profileForm.value);
      alert("login succecfully")
      console.log(this.logindata)

    }
    else {
      alert("login failed")
      this.router.navigate(['/login'])

    }

  }

}
