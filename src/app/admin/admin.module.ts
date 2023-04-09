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
import { ReactiveFormsModule } from '@angular/forms';
import { UserReportComponent } from './report/user-report/user-report.component';
import { TransactionReportComponent } from './report/transaction-report/transaction-report.component';
import { BetsComponent } from './report/bets/bets.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent
  },
  {
    path: 'users',
    component:UsersComponent
  },
  {
    path: 'add-user/:id',
    component:AddUserComponent
  },
  {
    path: 'add-user',
    component:AddUserComponent
  },
  {
    path: 'user-report/:id',
    component:UserReportComponent
  },
  {
    path: 'user-report',
    component:UserReportComponent
  },
  {
    path: 'bet-report',
    component:BetsComponent
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    UsersComponent,
    AddUserComponent,
    SidebarComponent,
    UserReportComponent,
    TransactionReportComponent,
    BetsComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AdminModule { }
