import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userId!: any;
  userForm!: FormGroup;
  buttonLabel:string='Add';
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      mobileNumber: new FormControl('', Validators.required),
      walletBalance: new FormControl('', Validators.required),
    });
    this.userId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    if (this.userId) {
      this.buttonLabel='Edit';
      this.getUser();
    }
  }

  getUser() {
    this.userService.getUser(this.userId).subscribe((data) => {
      console.log(data);
      this.fetchUserData(data.data);
    });
  }
  fetchUserData(user: any) {
    this.userForm.get('name')?.setValue(user.name);
    this.userForm.get('password')?.setValue(user.password);
    this.userForm.get('state')?.setValue(user.state);
    this.userForm.get('city')?.setValue(user.city);
    this.userForm.get('mobileNumber')?.setValue(user.mobile_number);
    this.userForm.get('walletBalance')?.setValue(user.wallet_balance);
  }
  onSubmit(form: FormGroup) {
    if (form.invalid) {
      this.toastr.error('Please fill all mandatory fields!!!');
      return;
    }
    const user = {
      user_id: 'ta-na-827',
      name: form.value.name,
      password: form.value.password,
      mobile_number: form.value.mobileNumber,
      wallet_balance: form.value.walletBalance,
      city: form.value.city,
      state: form.value.state,
      deleted: 0,
      usertype: 'user',
    };
    if(this.userId){
      this.userService.updateUser(user,this.userId).subscribe(
        (data) => {
          this.toastr.success('User updated successfully!');
          this.router.navigate(['/admin/users']);
        },
        (err) => {
          this.toastr.error(err.message);
        }
      );
    }else{
      this.userService.addUser(user).subscribe(
        (data) => {
          this.toastr.success('User added successfully!');
          this.router.navigate(['/admin/users']);
        },
        (err) => {
          this.toastr.error(err.message);
        }
      );
    }
  }
  ngOnDestroy() {}
}
