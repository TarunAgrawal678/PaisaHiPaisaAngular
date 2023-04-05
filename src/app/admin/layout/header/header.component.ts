import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/auth/service/authenticate.service';
declare let $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticateService:AuthenticateService) { }

  ngOnInit(): void {
    $('.settings-btn, .offset-close').on('click', function() {
      $('.offset-area').toggleClass('show_hide');
      $('.settings-btn').toggleClass('active');
  });
  }
  logout(){
    this.authenticateService.logout();
  }

}
