import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserForm!: FormGroup;
  loading = false;
  submitted = false;
  loginError = false;
  username!:string;
  showErrorMessage!:string;
  constructor(private FB:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.UserForm = this.FB.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

}
