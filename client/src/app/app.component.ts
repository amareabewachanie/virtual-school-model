import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [
      {
        label: 'Home',
        icon: 'fa fa-home',
        routerLink: 'home'
    },
      {
          label: 'Education',
          icon: 'fa fa-graduation-cap',
          routerLink: 'education'
      },
      {
          label: 'Models',
          icon: 'fa fa-question-circle',
      },
      {
          label: 'Q & A',
          icon: 'pi pi-fw pi-pencil',
      },
      {
          label: 'News',
          icon: 'fa fa-news'
      },
      {
        label: 'Adminstration',
        icon: 'fa fa-gamepad',
        routerLink: 'mamangment'
    }
  ];
  }
}
