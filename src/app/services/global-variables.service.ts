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
      name: "The Baku City1!",
      rating: "4.5",
      price: "$ 400",
      image: "../../assets/images/baku.png",
    },
    {
      id: 2,
      countryId: 1,
      name: "The Baku City2!",
      rating: "4.5",
      price: "$ 450",
      image: "../../assets/images/baku.png",
    },
    {
      id: 3,
      countryId: 1,
      name: "The Baku City3!",
      rating: "4.5",
      price: "$ 550",
      image: "../../assets/images/baku.png",
    },
    {
      id: 4,
      countryId: 2,
      name: "The Instanbul Turkey1!",
      rating: "4.5",
      price: "$ 300",
      image: "../../assets/images/turkey.png",
    },
    {
      id: 5,
      countryId: 2,
      name: "The Instanbul Turkey2!",
      rating: "4.5",
      price: "$ 600",
      image: "../../assets/images/turkey.png",
    },
    {
      id: 6,
      countryId: 2,
      name: "The Instanbul Turkey3!",
      rating: "4.5",
      price: "$ 700",
      image: "../../assets/images/turkey.png",
    },
    {
      id: 7,
      countryId: 2,
      name: "The Instanbul Turkey!",
      rating: "4.5",
      price: "$ 4300",
      image: "../../assets/images/turkey.png",
    },
    {
      id: 8,
      countryId: 3,
      name: "The Maldives city1!",
      rating: "4.5",
      price: "$ 5400",
      image: "../../assets/images/maldive.png",
    },
    {
      id: 9,
      countryId: 3,
      name: "The Maldives city2!",
      rating: "4.5",
      price: "$ 350",
      image: "../../assets/images/maldive.png",
    },
  ];
  cityCopy: any = [];
  currentRoute: string = "";
  showSideBar: boolean = false;
  cityid;
  constructor() {}
}
