import { Component, OnInit } from "@angular/core";
import { GlobalVariablesService } from "../services/global-variables.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  flightdataCopy: any = [];
  selectedIndex: any = -1;
  
  constructor(public global: GlobalVariablesService) {}

  ngOnInit() {
    this.global.ishistory = true;
    this.global.isShowprofile = false;
    this.global.isHidden1 = false;
    this.global.isHidden = false;
    this.global.isShowbackbtn = true;
    this.flightdataCopy = JSON.parse(localStorage.getItem("flightdata"));
  }

  showhistory(i) {
    if (this.selectedIndex == i) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = i;
    }
  }
}
