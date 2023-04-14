import { Component, OnInit } from '@angular/core';
import { UserReportService } from 'src/app/admin/report/user-report.service';
import { AuthenticateService } from 'src/app/auth/service/authenticate.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})
export class UserReportComponent implements OnInit {

  betsReport:Array<any>=[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private userReportService:UserReportService,
    private authenticateService:AuthenticateService) { }

  ngOnInit(): void {
    this.getAllBets();
  }

  getAllBets(){
    const user=JSON.parse(localStorage.getItem('currentUser')!);
    this.userReportService.getUserReportByUserId(user.user.id).subscribe(data=>{
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
  logout(){
    this.authenticateService.logout();
  }

}
