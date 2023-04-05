import { Component } from '@angular/core';
import { AuthenticateService } from './auth/service/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paisahipaisa';
  isUserLoggedIn!:boolean;
  userType!:string;

  constructor(private authenticateService:AuthenticateService){

  }

  ngOnInit(){
    this.checkUserLogin();
    this.authenticateService.isUserLoggedIn.subscribe(data=>{
      this.isUserLoggedIn=data;
      this.checkUserLogin();
    })
  }

  checkUserLogin(){
    const user=JSON.parse(localStorage.getItem('currentUser')!);
    this.isUserLoggedIn= user?true:false;
    this.userType=user?.user.usertype;
  }
}
