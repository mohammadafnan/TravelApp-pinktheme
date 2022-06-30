import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GlobalVariablesService } from "../services/global-variables.service";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  sidebarshow: boolean = false;
  tourdatacopy: any[];
  hoteldatacopy: any[];
  busdatacopy: any[];
  public mygroup: FormGroup;
  keyword = "fromcity";
  constructor(
    private router: Router,
    public global: GlobalVariablesService,
    private fb: FormBuilder
  ) {
    this.mygroup = this.fb.group({
      search: ["", null],
    });
  }

  newcountryid: number;

  search: any;
  showloader: boolean = false;
  show: String = "tourlist";
  id: number;
  tourData = [
    {
      countryId: 1,
      countryDisc: "The Azerbaijan ",
      countryname: "Azerbaijan",
      image: "../../assets/images/baku.png",
    },
    {
      countryId: 2,
      countryDisc: "The Turkey",
      countryname: "Turkey",
      image: "../../assets/images/turkey.png",
    },
    {
      countryId: 3,
      countryDisc: "The Maldive",
      countryname: "Maldive",
      image: "../../assets/images/maldive.png",
    },
    {
      countryId: 4,
      countryDisc: "The Germany",
      countryname: "Germany",
      image: "../../assets/images/Germany.png",
    },
    {
      countryId: 5,
      countryDisc: "The Greece",
      countryname: "Greece",
      image: "../../assets/images/pexels-travel1.jpg",
    },
  ];

  hotelData = [
    {
      id: 1,
      countryDisc: "The Hotel ",
      country: "Azerbaijan",
      image: "../../assets/images/hotel1.jpg",
    },
    {
      id: 2,
      countryDisc: "The Hotel",
      country: "Turkey",
      image: "../../assets/images/hotel2.jpg",
    },
    {
      id: 2,
      countryDisc: "The Hotel",
      country: "Maldive",
      image: "../../assets/images/hotel3.jpg",
    },
    {
      id: 3,
      countryDisc: "The Hotel",
      country: "Germany",
      image: "../../assets/images/hotel4.jpg",
    },
    {
      id: 3,
      countryDisc: "The Hotel",
      country: "Greece",
      image: "../../assets/images/hotel5.jpg",
    },
  ];
  busData = [
    {
      id: 1,
      countryDisc: "The Bus ",
      country: "Daewoo 1",
      image: "../../assets/images/bus1.jpeg",
    },
    {
      id: 2,
      countryDisc: "The Bus",
      country: "Daewoo 2",
      image: "../../assets/images/bus2.jpeg",
    },
    {
      id: 2,
      countryDisc: "The Bus",
      country: "Daewoo 3",
      image: "../../assets/images/bus3.jpeg",
    },
    {
      id: 3,
      countryDisc: "The Bus",
      country: "Daewoo 4",
      image: "../../assets/images/bus4.jpeg",
    },
    {
      id: 3,
      countryDisc: "The Bus",
      country: "Daewoo 5",
      image: "../../assets/images/bus5.jpeg",
    },
  ];



  ngOnInit() {
    this.global.isShowprofile = true;
    this.global.isShowbackbtn = false;
    this.global.currentRoute = this.router.routerState.snapshot.url;
    this.tourdatacopy = Object.assign([], this.tourData);
    this.hoteldatacopy = Object.assign([], this.hotelData);
    this.busdatacopy = Object.assign([], this.busData);
    this.tourdatacopy = this.tourData;
    // this.global.cityCopy = this.global.city;
    // console.log(this.global.cityCopy, "citycopy")
  }

  gotodetail(countryid) {
    this.global.newcountryid = countryid;

    this.showloader = true;
    this.findcity(countryid);
    // localStorage.setItem("cityCopyData", JSON.stringify(this.global.cityCopy));
    setTimeout(() => {
      this.global.isHidden = true;
      this.global.isHidden1 = false;
      this.global.isShowprofile = false;
      this.global.isShowbackbtn = true;
      // this.global.isShowprofile = false
      this.router.navigate(["/tourdetail/" + countryid]);
    }, 1000);
  }

  findcity(countryid) {
    let citydata = this.global.city.filter((a) => a.countryId == countryid);
    this.global.cityCopy = citydata;
    // console.log(this.global.cityCopy, "city data  in  dashboard");
  }

  showsidebar() {
    this.sidebarshow = !this.sidebarshow;
  }

  gototourdata(text: any) {
    this.show = text;
  }

  // filterData() {
  //   try {
  //     let SearchText = this.mygroup.get("search").value;
  //     if (SearchText !== " ") {
  //       SearchText = SearchText.toLowerCase();
  //       this.showloader = true;

  //       this.tourData = this.tourdatacopy.filter(
  //         (x) =>
  //           x.country.toLowerCase().indexOf(SearchText) >= 0 ||
  //           x.countryDisc.toLowerCase().indexOf(SearchText) >= 0
  //       );
  //     } else {

  //     }

  //     this.mygroup.reset();
  //     setTimeout(() => {
  //       this.showloader = false;
  //     }, 300);
  //   } catch (x) {}
  // }

  tab(newid: number) {
    this.id = newid;

    if (newid == -1) {
      this.showloader = true;

      this.tourData = this.tourdatacopy;
      this.hotelData = this.hoteldatacopy;
      this.busData = this.busdatacopy;
      setTimeout(() => {
        this.showloader = false;
      }, 300);
      return;
    }

    this.tourData = this.tourdatacopy;
    this.hotelData = this.hoteldatacopy;
    this.busData = this.busdatacopy;
    this.showloader = true;

    let data = this.tourData.filter((a) => a.countryId == newid);
    // let data1 = this.hotelData.filter(a => a.id == newid);
    // let data2 = this.busData.filter(a => a.id == newid);

    setTimeout(() => {
      this.showloader = false;
    }, 300);

    this.tourData = data;
    // this.hotelData = data1;
    // this.busData = data2;
  }
}
