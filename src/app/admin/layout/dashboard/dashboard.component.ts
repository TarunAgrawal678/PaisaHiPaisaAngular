import { Component, OnInit } from '@angular/core';
import { UserReportService } from '../../report/user-report.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  betsReport:Array<any>=[];
  bets:Array<any>=[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private userReportService:UserReportService,) { }

  ngOnInit(): void {
    this.getAllBets();
  }

  getAllBets(){
    this.userReportService.getBetsReport().subscribe(data=>{
      this.bets=data.data.rows;
    });
  }

  getBetById(betId:number){
    this.userReportService.getUserReportByBetId(betId).subscribe(data=>{
      this.bets=data.data.rows;
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

}
