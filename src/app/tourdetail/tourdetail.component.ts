import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourdetail',
  templateUrl: './tourdetail.component.html',
  styleUrls: ['./tourdetail.component.css']
})
export class TourdetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backtohome() {
    this.router.navigate(['/dashboard'])
  }
}
