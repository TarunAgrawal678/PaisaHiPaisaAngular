import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
declare let $: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  users:Array<any>=[];
  constructor(private userService:UserService,
    private router:Router,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    if ($('#dataTable3').length) {
      $('#dataTable3').DataTable({
        responsive: true,
      });
    }
    this.getAllUsers();
  }

  getAllUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      this.users=data.data.rows;
    })
  }

  deleteUser(userId:number){
    if(confirm("Are you sure to delete this user?")){
      this.userService.deleteUser(userId).subscribe(data=>{
        this.toastr.success('User deleted successfully!');
        this.getAllUsers();
      },err=>{
        this.toastr.error(err.message);
      })
    }
  }

  editUser(userId:number){
    this.router.navigate(['/admin/add-user/'+userId]);
  }
}
