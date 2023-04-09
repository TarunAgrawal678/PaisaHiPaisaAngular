import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/users');
  }

  addUser(user:any):Observable<any>{
    return this.http.post<any>(this.apiUrl+'/users',user);
  }

  updateUser(user:any,userId:string){
    return this.http.put<any>(this.apiUrl+'/users/'+userId,user);
  }

  getUser(userId:number){
    return this.http.get<any>(this.apiUrl+'/users/'+userId);
  }

  deleteUser(userId:number){
    return this.http.delete<any>(this.apiUrl+'/users/'+userId);
  }

  getAllState():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/all/states');
  }

  getCityById(stateId:number):Observable<any>{
    return this.http.get<any>(this.apiUrl+'/cities/'+stateId);
  }
}
