import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TravelApp';
  show: boolean = false;
  constructor(private router: Router) { }

  // hide() {
  //   this.router.navigate(['']);
  // }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log("Current Route : ", this.router.routerState.snapshot.url);
  }



}
