import { Component } from '@angular/core';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adlogin',
  standalone: false,
  templateUrl: './adlogin.component.html',
  styleUrl: './adlogin.component.css'
})
export class AdloginComponent {

  username:string="";
  password:string="";
  inValidLogin = false;

  constructor(private adminAuthService:AdminauthService,private router:Router){}

  checkLogin(){
    if(this.adminAuthService.authenticate(this.username,this.password)){
      this.router.navigate(['admin'])
      this.inValidLogin=false;        
    } else {
        this.inValidLogin=true;
        alert("Invalid Username OR Password");
        this.router.navigate(['home']);
    }
  }

}