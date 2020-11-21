import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { GradeService } from 'src/app/services/grade.service';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.css']
})
export class ManagmentComponent implements OnInit {

  breadcumbitems: MenuItem[];
  menuitems: MenuItem[];

  constructor(private gradeService: GradeService) { }

  ngOnInit(): void {
    this.breadcumbitems = [
      {label: 'Home', icon: 'pi pi-home', routerLink: '/home'},
      {label: 'Managment', icon: 'pi pi-edit', routerLink: '/mamangment'}
  ];
    this.menuitems = [
    {
       label: 'Education',
       icon: 'pi pi-fw pi-file',
       items: [
          {
             label: 'Grade',
             icon: 'pi pi-fw pi-plus',
             routerLink: 'grade'
          },
          {
             label: 'Subjects',
             icon: 'pi pi-fw pi-book',
             routerLink: 'subject'
          },
          {
             label: 'Topics',
             icon: 'pi pi-fw pi-external-link',
             routerLink: 'topic'
          }
       ]
    },
    {
       label: 'Quit',
       icon: 'pi pi-fw pi-power-off'
    }
];
    this.gradeService.getGrades();
  }
}
