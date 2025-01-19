import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth:boolean = false;
  constructor(private router:Router) { }
 
  signIn(email:string){
    this.isAuth=true;
    this.router.navigate(['/dashboard']);
  }
  signOut(){
    this.isAuth=false;
    this.router.navigate(['/auth']);
  }
}
