import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) {}
  errorMessage: string = '';
  isLoading: boolean = false;

  loginForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
     password: new FormControl(null, [Validators.required]),

   });
  ngOnInit(): void {}

  submitLoginForm(loginForm: FormGroup) {
    this.isLoading = true;
    if (loginForm.valid) {
      this._AuthService.signIn(loginForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            localStorage.setItem('userToken',response.token);
            this._AuthService.saveUserData();
            this._Router.navigate(['/home']);
          } else {
            this.errorMessage = response.error.error.message;
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          var x = error.error.message;
          // console.log('message', x);
          this.isLoading = false;
        },
      });
    }
  }

}
