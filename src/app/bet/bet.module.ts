import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetDashboardComponent } from './bet-dashboard/bet-dashboard.component';
import { ResultComponent } from './result/result.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'dashboard',
    component:BetDashboardComponent
  },
  {
    path: 'result',
    component:ResultComponent
  }
];

@NgModule({
  declarations: [
    BetDashboardComponent,
    ResultComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BetModule { }
