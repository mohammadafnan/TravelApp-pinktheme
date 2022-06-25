import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalVariablesService {
  isHidden: boolean = false;
  isHidden1: boolean = false;
  ishistory: boolean = false;
  isShowprofile: boolean = true;
  isShowbackbtn: boolean = true;
  flightdata: any = [];
  cityCopy: any = [];
  currentRoute: string;
  showSideBar: boolean = false;
  public newcountryid: number;
  states = [
    {
      name: "Karachi,Pakistan (KHI)",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      name: "Islamabad,Pakistan (ISB)",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      name: "Lahore,Pakistan (LHE)",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      name: "Peshawar,Pakistan (PEW)",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      name: "Dubai,United Arab Emirates (DXB)",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      name: "Instabul,Turkey(IST)",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      name: "London,United Kingdom (LHR)",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      name: "New York,United State (JFK)",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
  ];
  title: string[] = ["Mr", "Mrs", "Ms"];
  city = [
    {
      id: 1,
      countryId: 1,
      countryname: "Azerbaijan",
      cityname: "Baku ",
      cityrating: "4.5",
      cityprice: "$ 400",
      cityimage: "../../assets/images/baku.png",
    },
    {
      id: 2,
      countryId: 1,
      countryname: "Azerbaijan",
      cityname: "Yevlakh",
      cityrating: "4.5",
      cityprice: "$ 450",
      cityimage:
        "https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      countryId: 1,
      countryname: "Azerbaijan",
      cityname: "Ganja",
      cityrating: "4.5",
      cityprice: "$ 550",
      cityimage:
        "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      countryId: 2,
      countryname: "Turkey",
      cityname: "Konya",
      cityrating: "4.5",
      cityprice: "$ 300",
      cityimage:
        "https://images.pexels.com/photos/8120844/pexels-photo-8120844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      countryId: 2,
      countryname: "Turkey",
      cityname: "Antalya",
      cityrating: "4.5",
      cityprice: "$ 600",
      cityimage:
        "https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      countryId: 2,
      countryname: "Turkey",
      cityname: "Bursa",
      cityrating: "4.5",
      cityprice: "$ 700",
      cityimage:
        "https://images.pexels.com/photos/5342345/pexels-photo-5342345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      countryId: 2,
      countryname: "Turkey",
      cityname: "Instanbul ",
      cityrating: "4.5",
      cityprice: "$ 4300",
      cityimage: "../../assets/images/turkey.png",
    },
    {
      id: 8,
      countryId: 3,
      countryname: "Maldive",
      cityname: "Maldives isl 1",
      cityrating: "4.5",
      cityprice: "$ 5400",
      cityimage: "../../assets/images/maldive.png",
    },
    {
      id: 9,
      countryId: 3,
      countryname: "Maldive",
      cityname: "Maldives isl 2",
      cityrating: "4.5",
      cityprice: "$ 350",
      cityimage:
        "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  constructor() {}

  GetAll() {
    return;
  }
}
