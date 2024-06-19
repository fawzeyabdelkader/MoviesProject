import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
 @Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private _AuthService:AuthService){}
  isLogin:boolean=false;
  userInfo:any={};
  // userData:any={}
  logOut(){
    this._AuthService.signOut();
  }
  ngOnInit(): void {
  this._AuthService.userData.subscribe({
    next:(res:any)=>{
      // console.log(res,'Hello From Nav Bar');
      if(res){
        this.isLogin=true;
        this.userInfo=this._AuthService.userData;
        console.log(this.userInfo.getValue().name);

        // this.userInfo=res.name;
      }
      else{
        this.isLogin=false;
        // this.userData=null;
      }


      // console.log( this._AuthService.userData.getValue());


      // if ( this._AuthService.userData.getValue()!=null) {
      //   this.isLogin=true;
      //   console.log( this._AuthService.userData.getValue());

      // }
      // else{
      //   this.isLogin=false;

      // }
    }
  })
  }
}
