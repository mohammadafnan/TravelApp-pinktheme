import { Component, OnInit } from "@angular/core";
import { GlobalVariablesService } from "../services/global-variables.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  flightdataCopy: any = [];
  constructor(public global: GlobalVariablesService) { }

  ngOnInit() {
    this.global.ishistory = true;
    this.global.isShowprofile = false
    this.global.isHidden1 = false;
    this.global.isHidden = false;
    this.global.isShowbackbtn = true;

    // JSON.parse(localStorage.getItem("Selected country name")); //retrieve the key
    this.flightdataCopy = JSON.parse(localStorage.getItem("flightdata"));
    console.log("flightdataCopy Data", this.flightdataCopy);

  }
}
