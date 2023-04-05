import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { UsersComponent } from './user/users/users.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent
  },
  {
    path: 'users',
    component:UsersComponent
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    UsersComponent,
    AddUserComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AdminModule { }
