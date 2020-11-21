import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { GradeComponent } from './components/managment/grade/grade.component';
import { ManagmentComponent } from './components/managment/managment.component';
import { SubjectComponent } from './components/managment/subject/subject.component';
import { TopicComponent } from './components/managment/topic/topic.component';
import { UserComponent } from './components/managment/user/user.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'account',
    component: AccountComponent
  }, {
    path: 'mamangment',
    component: ManagmentComponent,
    children: [
      {
        path: 'user',
        component: UserComponent
      }, {
        path: 'grade',
        component: GradeComponent
      }, {
        path: 'subject',
        component: SubjectComponent
      }, {
        path: 'topic',
        component: TopicComponent
      }
    ]
  }, {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
