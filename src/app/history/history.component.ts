import { Component, OnInit } from "@angular/core";
import { GlobalVariablesService } from "../services/global-variables.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  flightdataCopy: any = [];
  selectindex: number;
  constructor(public global: GlobalVariablesService) { }
  Show: boolean = false;
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
  showhistory(i) {
    this.selectindex = i
  this.flightdataCopy.countryId =    this.selectindex

 alert(this.flightdataCopy.countryId)
    this.Show = !this.Show
  }
}
