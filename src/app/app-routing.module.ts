import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { TasksComponent } from './tasks/tasks.component'
import { HorizontalComponent } from './horizontal/horizontal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDetailComponent }  from './task-detail/task-detail.component';

const routes: Routes = [
  { path: 'history', component: MessagesComponent },
  { path: 'home', component:  HorizontalComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}