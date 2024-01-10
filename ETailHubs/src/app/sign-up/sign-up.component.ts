import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  
  signupForm!: FormGroup;
  fb: FormBuilder = new FormBuilder;

  ngOnInit(): void {
    this.signupForm= new FormGroup({
      fullName:new FormControl("",Validators.required),
      phoneNo: new FormControl("",Validators.maxLength(10)),
      email: new FormControl ('', [Validators.required, Validators.email]),
    })
  }


  onSubmit() {
    if (this.signupForm.valid) {
      
      console.log('Form submitted:', this.signupForm.value);
    }
  }
  
}
