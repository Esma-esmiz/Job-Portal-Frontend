import { Component } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  faArrowLeft= faArrowLeft;
  passwordPattern:string = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  signupForm= new FormGroup({
    type: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
    phone: new FormControl('', Validators.required),
    terms: new FormControl('', Validators.required),
  })

  onSubmit(){
    console.warn(this.signupForm.value)
  }

}
