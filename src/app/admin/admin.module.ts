import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './user/users/users.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserReportComponent } from './report/user-report/user-report.component';
import { TransactionReportComponent } from './report/transaction-report/transaction-report.component';
import { BetsComponent } from './report/bets/bets.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TransactionComponent } from './report/transaction/transaction.component';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent
  },
  {
    path: 'dashboard',
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
  {
    path: 'transaction-report',
    component:TransactionComponent
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
    BetsComponent,
    TransactionComponent
  ],
  imports: [
    CommonModule,
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
