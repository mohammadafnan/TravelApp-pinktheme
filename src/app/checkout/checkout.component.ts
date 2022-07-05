import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
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
  show: string = "bank1";
  indexno: number = -1;
  myDateValue: Date;
  minDate: Date;
  maxDate: Date;
  showstep: string = "1";
  CheckoutData: any = [
    {
      id: 1,
      Bankname: "UBL",
      image:
        "data:image/png;base64,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",
    },
    {
      id: 2,
      Bankname: "Alfalah",
      image:
        "https://smartchoice.pk/blog/wp-content/uploads/2015/08/Bank-Alfalah1.jpg",
    },
    {
      id: 3,
      Bankname: "HBL",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAgmn///8Ad1oAfWIAel8AeV3I3Na21M3V5ODb7Ogmj3mWvrMAf2UAg2qjyL81kn2JvK/w+fdhoZCty8JvrZ5QnozB29WnyL+PvLGAtKZ2rJ3Z5uInkHobiXKcxbq00clImoc7lYDr9PKDuq1nqJmqRgRgAAACW0lEQVR4nO3Z7XaaMACAYSAJooutzo9qN7RD7/8a1yMhYCRxntPZwHmfnyZYXq0JSpIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAURGyJvoG9c2g9BO6/2D5X8//LvGW13Y9iXpvBlfNYFnkPsfdRndj9LsZmHxvovyV1vrOQ7yYwamqH9C/06BJ2b5O4od5cJk9qaWfLB4qnIUL0/TdPs1YC9N18y6OtjC1B4+28GDexKEXHlddx+3SFlZm7tALZ0p0SKnWNnFuDh544auzvSdqZ+PNwWMr1B92yBw83sLSHDy2QrkwI5V5oogL2wUkO9wv1BdCzZrVdBV7oU5eWsXdQvFn8+m82zYDzVIabaFOqvSWt7CzSRjnyK/a9Lwv0Fuo9s7EahP5lbcuewN9herkTtzO4i7U5dI95VBhu8l3HJqeGAv919W9hXalvTaJ97q03bP/qVCsPJP39VoTY+Fpt7h2ygOFr4fu1Ldpm1h/FCMsTLRwhHf8q6ky29jC9WWdjbHwxiNXbYk8N2PHy1ONrzARzVh+mT3CwqzZaoqxFsqxv4fCLjX1L+SDLxT6ilDtBd/ZWUvVvFc5v/2LERWuf145n9qvT8t6si30qcqoCwMWzjWNLzC5/SgPo3Dqfsf3TNPPCfz6wsoeHCycuncbB1NYzJszDxYWz7un+LWF1brdGUKFuXpS3if1WGHgDuk0P3yozo3kQOH2qTukymq9/zbCDNqXXGdeSjkfLeGd+s139gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXX7DzLBurRWjAAAAAAElFTkSuQmCC",
    },
    {
      id: 4,
      Bankname: "MCB",
      image:
        "data:image/png;base64,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",
    },
    {
      id: 5,
      Bankname: "JS",
      image:
        "data:image/png;base64,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",
    },
  ];
  id: number;
  agerange: any = 0;
  keyword = "fromcity";


  constructor(
    public global: GlobalVariablesService,
    public router: Router,
    private fb: FormBuilder
  ) {
    this.myform = this.fb.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      phoneno: ["", Validators.required],
      email: ["", Validators.required],
      cnic: ["", Validators.required],
      acountno: ["", Validators.required],
      title: ["", Validators.required],
      bank: ["", Validators.required],
      countryname: ["", Validators.required],
      cityname: ["", Validators.required],
      cityprice: ["", Validators.required],
      date: ["", Validators.required],
      fromlocation: ["", Validators.required],
      ticketclass: ["", Validators.required],
      adultqty: ["", Validators.required],

    });
  }

  ngOnInit() {
    this.myDateValue = new Date();
    this.myform.patchValue({
      date: new Date("project.date"),
    });
    console.log(this.myDateValue);
    this.global.isHidden1 = true;
    this.global.isShowprofile = false;
    this.global.currentRoute = this.router.routerState.snapshot.url;
    this.setvalue();

    // JSON.parse(localStorage.getItem("Selected country name"));
     //retrieve the key
    // console.log(
    //   "Selected country name" + JSON.parse(localStorage.getItem("Selected country name"))
    // );
    // JSON.parse(localStorage.getItem("Selected city name"));
     //retrieve the key
    // console.log(
    //   "Selected city name" + JSON.parse(localStorage.getItem("Selected city name"))
    // );
    // JSON.parse(localStorage.getItem("Selected city price")); 
    //retrieve the key
    // console.log(
    //   "Selected city price" + JSON.parse(localStorage.getItem("Selected city price"))
    // );
    // this.minDate=new Date(2017,1,1);
    // this.maxDate=new Date(2022,11,1)
  }

  onSubmit() {
    this.global.flightdata.push(this.myform.value);
    localStorage.setItem("flightdata", JSON.stringify(this.global.flightdata));
    this.myform.reset();
    alert("Succecfully Booked");
    console.log(this.global.flightdata);
    this.showloader = true;
    setTimeout(() => {
      this.router.navigate(["/dashboard"]);
    }, 2000);
  }

  gotobank(list: any, i: any) {
    this.indexno = i;
    // console.log(this.indexno);
    // debugger
    this.myform.get("bank").setValue(list.Bankname);
    // console.log(this.global.fightdata);
    // debuger
  }

  setvalue() {
    this.myform
      .get("countryname")
      .setValue(JSON.parse(localStorage.getItem("Selected country name")));
    this.myform
      .get("cityname")
      .setValue(JSON.parse(localStorage.getItem("Selected city name")));
    this.myform
      .get("cityprice")
      .setValue(JSON.parse(localStorage.getItem("Selected city price")));
    this.myform
      .get("ticketclass")
      .setValue(JSON.parse(localStorage.getItem("Selected ticket Class name")));
    this.myform
      .get("adultqty")
      .setValue(JSON.parse(localStorage.getItem("Selected Adult Qty")));
  }

  age(age) {
    this.agerange = age.target.value;
  }

  step(stp) {
    this.showstep = stp;
  }
}

// if (this.indexno == i) {
//   this.indexno = -1
// }
// else {
//   this.indexno = i;
//   console.log(this.indexno);
