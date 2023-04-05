import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if ($('#dataTable3').length) {
      $('#dataTable3').DataTable({
        responsive: true,
      });
    }
  }
}
