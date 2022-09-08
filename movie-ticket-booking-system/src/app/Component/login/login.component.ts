import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { userDetail } from 'src/app/IUser';
import { UserService } from 'src/app/Services/userService';

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
  username!: string;
  showErrorMessage!: string;
  constructor(private FB: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.UserForm = this.FB.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get authForm(){return this.UserForm.controls}
  
  async userLogin(Model: userDetail) {

    this.submitted = true;

    if (this.UserForm.invalid) {
      return;
    }
    this.loading = true;
    //Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.
    //Pipes are useful because we can use them throughout our application, while only declaring each pipe once.
    (await
      //Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.
      //Pipes are useful because we can use them throughout our application, while only declaring each pipe once.
      (
        //Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.
        //Pipes are useful because we can use them throughout our application, while only declaring each pipe once.
        this.userService.AuthorizeUserLogin(Model))).pipe(first()).subscribe({
        next: () => {
          console.log(Model);
          this.username = Model.userName;
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);

        },
        error: error => {
          this.loading = false;
          this.loginError = true;

          this.showErrorMessage = error;
        }
      });


  }
}


