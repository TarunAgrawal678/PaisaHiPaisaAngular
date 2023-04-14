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
    const user=JSON.parse(localStorage.getItem('currentUser')!);
    return this.http.get<any>(this.apiUrl+'/bets');
    // return this.http.get<any>(this.apiUrl+'/bets?user_id='+user.user.id);
  }

  getUserReportByUserId(userId:any):Observable<any>{
    return this.http.get<any>(this.apiUrl+'/bets?user_id='+userId);
  }

  getBetsReport():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/allbets');
  }

  getTransactionReport():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/all/transactions');
  }

  getDashboardReport():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/admin/dashboard');
  }
}
