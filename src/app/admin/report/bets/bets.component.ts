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
  constructor(private userReportService:UserReportService,) { }

  ngOnInit(): void {
    if ($('#betTable').length) {
      $('#betTable').DataTable({
        responsive: true,
      });
    }
    this.getAllBets();
  }

  getAllBets(){
    this.userReportService.getBetsReport().subscribe(data=>{
      this.betsReport=data.data.rows;
    })
  }

}
