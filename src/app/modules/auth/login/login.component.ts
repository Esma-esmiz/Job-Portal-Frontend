import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
 
})
export class LoginComponent {
  faArrowLeft= faArrowLeft;
  loginForm= new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  onSubmit(){
    console.warn(this.loginForm.value.email);
  }

}
