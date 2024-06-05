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
      fromcity: "Karachi,(KHI)",
      fromcountry: "Pakistan ",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "Islamabad,(ISB)",
      fromcountry: "Pakistan ",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "Lahore,(LHE)",
      fromcountry: "Pakistan ",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "Peshawar,(PEW)",
      fromcountry: "Pakistan ",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "Dubai,(DXB)",
      fromcountry: "United Arab Emirates",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "Instabul,(IST)",
      fromcountry: "Turkey",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "London,(LHR)",
      fromcountry: "United Kingdom",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "New York,(JFK)",
      fromcountry: "United State",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
  ];


  MainSearch = [
    {
      fromcity: "Azerbaijan",
      fromcountry: "Azerbaijan ",
      flag: "https://fontawesome.com/icons/map-pin?f=classic&s=solid",
    },
    {
      fromcity: "Turkey",
      fromcountry: "Turkey ",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "Maldive",
      fromcountry: "Maldive ",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "Germany",
      fromcountry: "Germany ",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    {
      fromcity: "Greece",
      fromcountry: "Greece ",
      flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    },
    // {
    //   fromcity: "Dubai,(DXB)",
    //   fromcountry: "United Arab Emirates",
    //   flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    // },
    // {
    //   fromcity: "Instabul,(IST)",
    //   fromcountry: "Turkey",
    //   flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    // },
    // {
    //   fromcity: "London,(LHR)",
    //   fromcountry: "United Kingdom",
    //   flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    // },
    // {
    //   fromcity: "New York,(JFK)",
    //   fromcountry: "United State",
    //   flag: "https://img.icons8.com/arcade/64/F25081/experimental-marker-arcade.png",
    // },
  ];

  title: string[] = ["Mr", "Mrs", "Ms"];
  ticketclass: any[] = [
    {
      id: 1,
      class: "Economy"
    },
    {
      id: 2,
      class: "Premium"
    }, {
      id: 3,
      class: "Business"
    }, {
      id: 4,
      class: "First Class"
    },
    {
      id: 5,
      class: "Special Class"
    },
    
  ]

  Baggage: any[] = [
    {
      id: 1,
      bag: "No baggage",
      bagprice:"PKR 0"
    },
    {
      id: 2,
      bag: "1 Pc - 10 KG",
      bagprice:"PKR 1500"
    }, {
      id: 3,
      bag: "1 Pc - 20 KG",
      bagprice:"PKR 2000"
    }, 
    
  ]

  city = [
    {
      cityId: 1,
      countryId: 1,
      countryname: "Azerbaijan",
      cityname: "Baku ",
      cityrating: "4.5",
      cityprice: "$ 400",
      cityimage: "../../assets/images/baku.png",
    },
    {
      cityId: 2,
      countryId: 1,
      countryname: "Azerbaijan",
      cityname: "Yevlakh",
      cityrating: "4.5",
      cityprice: "$ 450",
      cityimage:
        "https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      cityId: 3,
      countryId: 1,
      countryname: "Azerbaijan",
      cityname: "Ganja",
      cityrating: "4.5",
      cityprice: "$ 550",
      cityimage:
        "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      cityId: 4,
      countryId: 2,
      countryname: "Turkey",
      cityname: "Konya",
      cityrating: "4.5",
      cityprice: "$ 300",
      cityimage:
        "https://images.pexels.com/photos/8120844/pexels-photo-8120844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      cityId: 5,
      countryId: 2,
      countryname: "Turkey",
      cityname: "Antalya",
      cityrating: "4.5",
      cityprice: "$ 600",
      cityimage:
        "https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      cityId: 6,
      countryId: 2,
      countryname: "Turkey",
      cityname: "Bursa",
      cityrating: "4.5",
      cityprice: "$ 700",
      cityimage:
        "https://images.pexels.com/photos/5342345/pexels-photo-5342345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      cityId: 7,
      countryId: 2,
      countryname: "Turkey",
      cityname: "Instanbul ",
      cityrating: "4.5",
      cityprice: "$ 4300",
      cityimage: "../../assets/images/turkey.png",
    },
    {
      cityId: 8,
      countryId: 3,
      countryname: "Maldive",
      cityname: "Maldives isl 1",
      cityrating: "4.5",
      cityprice: "$ 5400",
      cityimage: "../../assets/images/maldive.png",
    },
    {
      cityId: 9,
      countryId: 3,
      countryname: "Maldive",
      cityname: "Maldives isl 2",
      cityrating: "4.5",
      cityprice: "$ 350",
      cityimage:
        "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      cityId: 10,
      countryId: 4,
      countryname: "Germany",
      cityname: "Berlin",
      cityrating: "4.5",
      cityprice: "$ 350",
      cityimage:
        "https://images.pexels.com/photos/3466324/pexels-photo-3466324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      cityId: 11,
      countryId: 4,
      countryname: "Germany",
      cityname: "Humburg",
      cityrating: "4.5",
      cityprice: "$ 350",
      cityimage:
        "https://images.pexels.com/photos/2506904/pexels-photo-2506904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      cityId: 12,
      countryId: 4,
      countryname: "Germany",
      cityname: "Munich",
      cityrating: "4.5",
      cityprice: "$ 350",
      cityimage:
        "https://images.pexels.com/photos/1885810/pexels-photo-1885810.jpeg",
    },
    {
      cityId: 13,
      countryId: 5,
      countryname: "Greece",
      cityname: "Athens",
      cityrating: "4.5",
      cityprice: "$ 350",
      cityimage:
        "https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  constructor() { }

  GetAll() {
    return;
  }
}
