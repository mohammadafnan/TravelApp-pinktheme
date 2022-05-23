import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GlobalVariablesService {
  fightdata: any = [];
  title: string[] = ["Mr", "Mrs", "Ms"];
  currentRoute: string = "";
  showSideBar: boolean = false;
  constructor() {}
}
