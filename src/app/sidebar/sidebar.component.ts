import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarshow: boolean = false;
  @Input() show: boolean = false;
  constructor(private router: Router) { }


  ngOnInit() {
  }
  gotologout() {
    this.router.navigate(["/"]);

  }

  gotohome() {
    this.router.navigate(["/dashboard"])
  }

  showsidebar() {
    this.sidebarshow = !this.sidebarshow;
  }
}
