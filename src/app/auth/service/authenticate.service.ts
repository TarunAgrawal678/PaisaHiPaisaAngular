import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  apiUrl:string=environment.apiUrl;

  constructor(private http:HttpClient,private router:Router) { }

  login(body:any):Observable<any>{
    return this.http.post<any>(this.apiUrl+'/login', body)
    .pipe(map(user => {
      // store user details jwt token in localStorage
      if(user.status){
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('token', user.accessToken);
      }
      // this.currentUserSubject.next(user);
      return user;
    }));
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return localStorage.getItem('currentUser')?true:false;
  }

  logout() {
    //remove user from localStorage
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
    // this.currentUserSubject.next(null);
  }
}
