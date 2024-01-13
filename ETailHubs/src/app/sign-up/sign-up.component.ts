import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  showPassword: boolean = false;
  showconfirmPassword: boolean = false;
  signupForm!: FormGroup;
  fb: FormBuilder = new FormBuilder;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      fullName: new FormControl("", Validators.required),
      phoneNo: new FormControl("", [Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("",Validators.required)
    },);
    this.validate();
  }
  public validate() {
    const confirmPasswordControl = this.signupForm.get('confirmPassword');
    if (confirmPasswordControl) {
      confirmPasswordControl.setValidators(this.validates(this.signupForm.get('password'), confirmPasswordControl));
      confirmPasswordControl.updateValueAndValidity();
    }
  }
   validates(control:AbstractControl| null,
    controlTwo: AbstractControl | null):ValidatorFn{
      return()=>{
        if(control?.value!=controlTwo?.value) return{match_error:true};
        return null;
      }
    } 
    
    
  
  private passwordMatch(control: AbstractControl) {
    const password = control.get("password")?.value;
    const confirmPassword = control.get("confirmPassword")?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  tooglepassowrdvisiility(){
    this.showPassword = !this.showPassword;
  }
  tooglepassowrdvisiility1(){
    this.showconfirmPassword = !this.showconfirmPassword;
  }
  onSubmit() {
    if (this.signupForm.valid) {
      
      console.log('Form submitted:', this.signupForm.value);
    }
    console.log(this.signupForm.value);
  }

  
}
