import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading =false;
  submitted=false;
  returnUrl: string;
  error: string;

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private authSvc:AuthService) {
      if (authSvc.loggedIn)
      this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    this.submitted=true;
    if (this.loginForm.invalid){
      return;
    }
    this.loading=true;
    this.authSvc.login(this.loginForm.controls.username.value,this.loginForm.controls.password.value).subscribe(response=>{
      this.router.navigate([this.returnUrl]);
    },err=>{this.submitted=false;this.loading=false;this.error=err.message||err;});
  }
}
