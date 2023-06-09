import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserReportService } from '../user-report.service';
declare let $: any;
@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})
export class UserReportComponent implements OnInit {

  userId!:number;
  reportData:Array<any>=[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private userReportService:UserReportService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    if(this.userId){
      this.getUserReport();
    }else{
      this.getAllUserReport();
    }
  }

  getUserReport(){
    this.userReportService.getUserReport(this.userId).subscribe(data=>{
      this.reportData=data.data;
    });
  }

  getAllUserReport(){
    this.userReportService.getAllUserReport().subscribe(data=>{
      this.reportData=data.data.rows;
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

