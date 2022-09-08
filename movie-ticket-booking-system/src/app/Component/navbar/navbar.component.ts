import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userDetail } from 'src/app/IUser';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!:userDetail;
  islogin = false;
  test!:string;
  username!:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.user){
      this.islogin = true;
    }
  }

  loginUser(): void{
    this.router.navigate(['/login']);
  }

   registerUser() : void{
    this.router.navigate(['/register']);
   }

}
