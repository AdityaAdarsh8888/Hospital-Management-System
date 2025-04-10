import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string, password:string){
    if(username=="adi" && password == "adi@1234"){
      sessionStorage.setItem('username',username);
      return true;
    } else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("Doctor logged in.");
    let user = sessionStorage.getItem('username');
    console.log(user);
    return !(user == null);
  }

  logOut(){
    console.log("Doctor Logged Out.");
    sessionStorage.removeItem('username');
  }
}
