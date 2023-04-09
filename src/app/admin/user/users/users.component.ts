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
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private userService:UserService,
    private router:Router,
    private toastr: ToastrService) {}

  ngOnInit(): void {
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

  showUserReport(userId:number){
    this.router.navigate(['/admin/user-report/'+userId]);
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
