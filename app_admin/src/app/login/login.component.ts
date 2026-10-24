import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';
import { User } from '../models/user';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  styleUrl: './login.component.css',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: ''
  }

  constructor (
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password ||
          !this.credentials.name) {
      this.formError = 'All fields are required, please try again';
      // this.router.navigateByUrl('#'); // Return to login page // Commented this out so it stays on the page for the user
      // fix their mistake instead of taking them back to the main screen
    } else {
      this.doLogin();
    }
}

private doLogin(): void {
  let newUser = {
    name: this.credentials.name,
    email: this.credentials.email
  } as User;
  // console.log('LoginComponent::doLogin');
  // console.log(this.credentials);
  this.authenticationService.login(newUser,
    this.credentials.password);
  if(this.authenticationService.isLoggedIn())
  {
    // console.log('Router::Direct');
    this.router.navigate(['']);
  } else {
      var timer = setTimeout(() => {
      if(this.authenticationService.isLoggedIn())
      {
        // console.log('Router::Pause');
        this.router.navigate(['']);
      }},3000);
    }
}

}
