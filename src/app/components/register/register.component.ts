import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  errorMessage: string = '';
  isLoading: boolean = false;

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(25),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    // last_name: new FormControl(null, [Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    password: new FormControl(null, [Validators.required]),
     rePassword: new FormControl(null, [Validators.required]),
    // password: new FormControl(null, [ Validators.pattern('/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/'),Validators.required]),
     // rePassword: new FormControl(null, [ Validators.pattern('/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/'),Validators.required]),
    // age: new FormControl(null, [Validators.min(16), Validators.max(80)]),
     phone: new FormControl(null, [Validators.required]),
     // phone : new FormControl(null, [Validators.pattern( '/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/'),Validators.required]),
  });
  ngOnInit(): void {}

  submitRegisterForm(registerForm: FormGroup) {
    this.isLoading = true;
    if (registerForm.valid) {
      this._AuthService.signUp(registerForm.value).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this._Router.navigate(['/login']);
          } else {
            this.errorMessage = response.error.error.message;
          }
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          var x = error.error.message;
          console.log('message', x);
          this.isLoading = false;
        },
      });
    }
  }
}
