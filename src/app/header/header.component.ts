import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalVariablesService } from "../services/global-variables.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  showImage: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public global: GlobalVariablesService
  ) { }
  currentid: any;
  ngOnInit() { }
  toggleSideBar() {
    this.global.showSideBar = !this.global.showSideBar;
  }

  getCurrentRouteName;

  backtohome() {
    this.router.navigate(["/dashboard"]);
  }
}
