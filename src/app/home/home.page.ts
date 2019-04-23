import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
	constructor(private router: Router, public authSvc: AuthService) {}

  ngOnInit() {
    this.verifyLogin()
  }

	private async verifyLogin() {
		try {
			const result = await this.authSvc.verifyEmailLink(this.router.url);
			if (result) {
				//do something
				console.log(result);
			}
		} catch (error) {
			console.log(error.code, error.message);
		}
	}
}
