import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  flightdataCopy: any = [];
  constructor() {}

  ngOnInit() {
    // JSON.parse(localStorage.getItem("Selected country name")); //retrieve the key
    this.flightdataCopy = JSON.parse(localStorage.getItem("flightdata"));
    console.log("flightdataCopy Data", this.flightdataCopy);
  }
}
