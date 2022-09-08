import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm!:FormGroup;
  loading = false;
  submitted = false;
  registerError = false;
  showErrorMessage!:string;

constructor(
  private userService: UserService,
  private formBuilder:FormBuilder,
  private route:ActivatedRoute,
  private router: Router) { }

  
ngOnInit(): void {
 const passwordValidators = [Validators.minLength(6)];

  this.RegisterForm = this.formBuilder
  .group({
     firstname:['',Validators.required],
     lastname:['',Validators.required],
     username:['',Validators.required],
     password:['',passwordValidators],
     emailaddress:['',Validators.required],
     phone:[Number,Validators.required]
  });
}

get userForm() {return this.RegisterForm.controls;}

async onRegister()
{
  console.log(this.RegisterForm);
this.submitted = true;
//stop here if form is invalid
if(this.RegisterForm.invalid){
  return;
}
}

get username(){
  return this.RegisterForm.get('username');

}
}
