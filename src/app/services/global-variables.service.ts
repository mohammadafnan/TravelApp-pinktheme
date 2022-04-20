import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  currentRoute: string = "";
  showSideBar: boolean = false;
  constructor() { }
}
