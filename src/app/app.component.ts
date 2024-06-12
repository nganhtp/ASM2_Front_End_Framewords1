import {Component, OnInit} from '@angular/core';
import {LOCALSTORAGE_KEY, ROUTER_CONFIG} from "./@core/config";
import {Router} from "@angular/router";


@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  data: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

    }
  }



