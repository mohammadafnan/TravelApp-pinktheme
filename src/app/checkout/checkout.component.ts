import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GlobalVariablesService } from "../services/global-variables.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  public myform: FormGroup;
  showloader: boolean = false;

  constructor(
    public global: GlobalVariablesService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.myform = this.fb.group({
      name: ["", Validators.required],
      phoneno: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.global.currentRoute = this.router.routerState.snapshot.url;
  }

  onSubmit() {
    this.global.fightdata.push(this.myform.value);
    this.myform.reset();
    alert("Succecfully Booked");
    console.log(this.global.fightdata);
    this.showloader = true;
    setTimeout(() => {
      this.router.navigate(["/dashboard"])
    }, 2000);
  }
}
