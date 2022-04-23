import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalVariablesService } from "../services/global-variables.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  logindata = [];
  showloader: boolean = false;
  public profileForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public global: GlobalVariablesService
  ) {
    this.profileForm = this.fb.group({
      name: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.global.currentRoute = this.router.routerState.snapshot.url;
  }

  gotodashboard(data) {
    if (data.name == "afnan" && data.password == "afnan123") {
      this.logindata.push(this.profileForm.value);
      alert("login succecfully");
      this.showloader = true;

      setTimeout(() => {
        this.router.navigate(["/dashboard"]);
      }, 5000);
      this.global.showSideBar = false;
      console.log(this.logindata);
    } else {
      alert("Please enter user name and password");
      this.router.navigate(["/login"]);
    }
  }
}
