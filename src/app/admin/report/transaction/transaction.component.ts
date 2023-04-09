import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserReportService } from '../user-report.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  userId!:number;
  reportData:Array<any>=[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private userReportService:UserReportService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTransactionReport();
  }

  getTransactionReport(){
    this.userReportService.getTransactionReport().subscribe(data=>{
      this.reportData=data.data;
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
