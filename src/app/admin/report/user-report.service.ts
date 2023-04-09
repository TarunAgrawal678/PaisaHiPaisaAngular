import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserReportService {

  apiUrl:string=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getUserReport(userId:number):Observable<any>{
    return this.http.get<any>(this.apiUrl+'/bets/user/'+userId);
  }

  getAllUserReport():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/bets');
  }

  getBetsReport():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/allbets');
  }

  getTransactionReport():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/all/transactions');
  }
}
