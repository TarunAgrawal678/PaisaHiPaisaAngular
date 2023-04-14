import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetDashboardComponent } from './bet-dashboard/bet-dashboard.component';
import { ResultComponent } from './result/result.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserReportComponent } from './user-report/user-report.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: 'dashboard',
    component:BetDashboardComponent
  },
  {
    path: 'result',
    component:ResultComponent
  },
  {
    path: 'report',
    component:UserReportComponent
  }
];

@NgModule({
  declarations: [
    BetDashboardComponent,
    ResultComponent,
    ProfileComponent,
    UserReportComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ]
})
export class BetModule { }
