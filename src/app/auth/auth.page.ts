import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email])

  constructor(public authSvc: AuthService) { }

  ngOnInit() {
  }

  public async sendEmailLink() {
    try {
      await this.authSvc.sendEmailLink(this.email.value)
      if(this.email.valid) {
        console.log(this.email.status)
        this.email.reset()
        console.log('We sent you an email with the login link.');
      } else {
        console.log("no email")
      }
    } catch (error) {
      console.log(error.code, error.message)
    }
  }

  loginWithGoogle() {
    try {
      return this.authSvc.google()
    } catch (error) {
      console.log(error.code, error.message)
    }
  }

  loginWithTwitter() {
    try {
      return this.authSvc.twitter()
    } catch (error) {
      console.log(error.code, error.message)
    }
  }
}
