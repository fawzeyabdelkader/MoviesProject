import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient,private _Router: Router,)
  {
    if ( localStorage.getItem("userToken")!=null) {
      this.saveUserData()
    }
    // else{
    //   this._Router.navigate(['/login']);

    // }
  }
  userData =new BehaviorSubject(null);


  saveUserData()
  {
    let encodedToken =JSON.stringify( localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    this.userData.next(decodedToken) ;
    console.log(this.userData);

  }
  signUp(formData: object): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      formData
    );
  }
  signIn(formData: object): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      formData
    );
  }
  signOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
    // console.log(this.userData);

  }
}
