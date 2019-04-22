import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public user$: Observable<firebase.User>;

	constructor(private router: Router, private afAuth: AngularFireAuth) {
		this.user$ = this.afAuth.user;
	}

	public twitter() {
		const provider: auth.AuthProvider = new auth.TwitterAuthProvider();
		return this.oAuthHandler(provider);
	}

	public google() {
		const provider: auth.AuthProvider = new auth.GoogleAuthProvider();
		return this.oAuthHandler(provider);
  }
  
  public logout() {
    this.afAuth.auth.signOut()
    // return this.router.navigate(['/'])
  }

	private async oAuthHandler(provider: auth.AuthProvider) {
		const result = await this.afAuth.auth.signInWithPopup(provider);
		// if (result) {
		// 	return this.router.navigate(['/']);
		// }
	}
}
