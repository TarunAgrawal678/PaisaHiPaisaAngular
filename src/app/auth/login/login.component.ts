import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private router:Router,private toastr: ToastrService,
    private authenticateService:AuthenticateService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    });
  }

  get loginFormControl(){
    return this.loginForm.controls;
  }

  onSubmit(form: FormGroup) {
    if(form.invalid){
      this.toastr.error('Please fill all mandatory fields!!!');
      return;
    }
    const body={'mobile_number': form.value.userName,'password': form.value.password }
    this.authenticateService.login(body).subscribe(
      data=>{
        if(data.status){
          this.toastr.success('Logged in successfully!');
          this.router.navigate(['/user/dashboard']);
        }else{
          this.toastr.error('Invalid credentials!!!');
        }
      }
    )
  }

}
