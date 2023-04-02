import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  apiUrl:string=environment.apiUrl;
  constructor(private http:HttpClient) { }

  placeBet(betBody:any):Observable<any>{
    return this.http.post<any>(this.apiUrl+'/bets', betBody);
  }

  getCurrentTime():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/current/bet');
  }
}
