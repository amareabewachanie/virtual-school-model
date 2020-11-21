import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  items: MenuItem[];
  registerItems: MenuItem[];
  activeIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-home', routerLink: '/home'},
      {label: 'Account', icon: 'pi pi-user', routerLink: '/account'}
  ];
    this.registerItems = [{
                  label: 'Personal'
                },
                {
                  label: 'Educational'
                }, {
                  label: 'Favourite'
                },
                {
                  label: 'Confirmation'
                }
];
  }

}
