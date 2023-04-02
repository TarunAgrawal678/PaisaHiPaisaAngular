import { Component, OnInit } from '@angular/core';
import { ResultService } from '../service/result.service';
import * as moment from 'moment';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  resultData:Array<any>=[];
  constructor(private resultService:ResultService) { }

  ngOnInit(): void {
    this.resultService.getResult().subscribe(data=>{
      this.resultData=data.data.rows;
    })
  }

  getFormatTime(time:string){
    return moment(time).format("YYYY-MM-DD HH:mm:ss").split(' ')[1];
  }

}
