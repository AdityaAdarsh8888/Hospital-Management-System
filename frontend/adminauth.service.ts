import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string, password:string){
    if(username=="gngroup" && password == "gn@1234"){
      sessionStorage.setItem('username2',username);
      return true;
    } else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("User logged in.");
    let user = sessionStorage.getItem('username2');
    return !(user == null);
  }

  logOut(){
    console.log("User Logged Out.");
    sessionStorage.removeItem('username2');
  }
}
