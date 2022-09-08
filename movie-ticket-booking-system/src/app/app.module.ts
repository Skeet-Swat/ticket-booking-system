import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './Component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { RegisterComponent } from './Component/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
