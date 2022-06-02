import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalVariablesService {
  fightdata: any = [];
  title: string[] = ["Mr", "Mrs", "Ms"];
  city = [
    {
      id: 1,
      countryId: 1,
      name: "Baku ",
      rating: "4.5",
      price: "$ 400",
      image: "../../assets/images/baku.png",
    },
    {
      id: 2,
      countryId: 1,
      name: "Yevlakh",
      rating: "4.5",
      price: "$ 450",
      image:
        "https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      countryId: 1,
      name: "Ganja",
      rating: "4.5",
      price: "$ 550",
      image:
        "https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      countryId: 2,
      name: "Konya",
      rating: "4.5",
      price: "$ 300",
      image:
        "https://images.pexels.com/photos/8120844/pexels-photo-8120844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      countryId: 2,
      name: "Antalya",
      rating: "4.5",
      price: "$ 600",
      image:
        "https://images.pexels.com/photos/2767815/pexels-photo-2767815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      countryId: 2,
      name: "Bursa",
      rating: "4.5",
      price: "$ 700",
      image:
        "https://images.pexels.com/photos/5342345/pexels-photo-5342345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      countryId: 2,
      name: "Instanbul ",
      rating: "4.5",
      price: "$ 4300",
      image: "../../assets/images/turkey.png",
    },
    {
      id: 8,
      countryId: 3,
      name: "Maldives isl 1",
      rating: "4.5",
      price: "$ 5400",
      image: "../../assets/images/maldive.png",
    },
    {
      id: 9,
      countryId: 3,
      name: "Maldives isl 2",
      rating: "4.5",
      price: "$ 350",
      image:
        "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  cityCopy: any = [];
  currentRoute: string = "";
  showSideBar: boolean = false;
  cityid;
  constructor() {}
}
