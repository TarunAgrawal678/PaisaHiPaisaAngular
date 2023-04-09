import { Component, OnInit } from '@angular/core';
import { UserReportService } from '../user-report.service';
declare let $: any;

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss']
})
export class BetsComponent implements OnInit {

  betsReport:Array<any>=[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private userReportService:UserReportService,) { }

  ngOnInit(): void {
    this.getAllBets();
  }

  getAllBets(){
    this.userReportService.getAllUserReport().subscribe(data=>{
      this.betsReport=data.data;
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

}
