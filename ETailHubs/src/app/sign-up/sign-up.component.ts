import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  showPassword: boolean = false;
  signupForm!: FormGroup;
  fb: FormBuilder = new FormBuilder;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      fullName: new FormControl("", Validators.required),
      phoneNo: new FormControl("", [Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("")
    }, { validators: this.passwordMatch.bind(this) });
  }
  
  private passwordMatch(control: AbstractControl) {
    const password = control.get("password")?.value;
    const confirmPassword = control.get("confirmPassword")?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  tooglepassowrdvisiility(){
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.signupForm.valid) {
      
      console.log('Form submitted:', this.signupForm.value);
    }
    console.log(this.signupForm.value);
  }
  
}
