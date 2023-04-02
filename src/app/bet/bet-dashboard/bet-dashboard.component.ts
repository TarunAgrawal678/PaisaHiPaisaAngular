import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateService } from 'src/app/auth/service/authenticate.service';
import { BetService } from '../service/bet.service';

@Component({
  selector: 'app-bet-dashboard',
  templateUrl: './bet-dashboard.component.html',
  styleUrls: ['./bet-dashboard.component.scss']
})
export class BetDashboardComponent implements OnInit {

  bets:Array<any>=[];
  amountInput:Array<any>=[];
  display!:string;
  betId!: number;

  constructor(private authenticateService:AuthenticateService,
    private betService:BetService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    for(let i=0;i<=36;i++){
      this.bets.push(i.toString());
      this.amountInput.push({amount:null,value:i.toString()});
    }
    // this.timer(9);
    this.getCurrentTime();
  }

  timer(second:number) {
    // let minute = 1;
    console.log('second::',second);
    let seconds: number = second;
    let textSec: any = "0";
    let statSec: number = second%60;

    const prefix = "0";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `0${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        this.clearUserInputs();
        
        clearInterval(timer);
        // setTimeout(() => {
          this.getCurrentTime();
        // }, 2000);
      }
    }, 1000);
  }

  clearUserInputs(){
    this.amountInput=[];
    for(let i=0;i<=36;i++){
      this.amountInput.push();
    }
  }
  calculateStartTimeForTimer(time:string){
    let today = new Date();
    let currentTimeSec=today.getSeconds()+(today.getMinutes()*60)+(today.getHours()*60*60);
    let prevTimeSec1=time.split(':');
    let prevTimeSec2=parseInt(prevTimeSec1[2])+ (parseInt(prevTimeSec1[1])*60) + (parseInt(prevTimeSec1[0])*60*60);
    let diffInSec=currentTimeSec-prevTimeSec2;
    this.timer(540-diffInSec);
  }

  confirmBet(amount:number,value:string){
    let body={
      "bet":amount,
      "value":value,
      "bet_id":this.betId
    }
    this.betService.placeBet(body).subscribe(data=>{
      console.log(data);
      this.toastr.success('Bet placed!!');
    })
  }

  getCurrentTime(){
    this.betService.getCurrentTime().subscribe(data=>{
      this.betId=data.data.id;
      this.fetchAmount(data.betsData);
      this.calculateStartTimeForTimer(data.data.start_time?.split(" ")[1]);
    })
  }

  fetchAmount(betsdata:Array<any>){
    if(betsdata?.length){
      betsdata.forEach(item=>{
        const index=this.amountInput.findIndex(a=>a.value===item.value);
        this.amountInput[index].amount=item.bet;
      });
    }
  }

  logout(){
    this.authenticateService.logout();
  }

}
