import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(public authSvc: AuthService) { }

  ngOnInit() {
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
