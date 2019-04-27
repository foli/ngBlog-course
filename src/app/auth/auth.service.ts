import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap, tap, shareReplay } from 'rxjs/operators'
import { environment } from '../../environments/environment';
import { WindowService } from '../shared/window.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../user/user';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public user$: Observable<User>;
	private baseURL = environment.baseURL;

	constructor(
		private router: Router,
		private afs: AngularFirestore,
		private afAuth: AngularFireAuth,
		private winSvc: WindowService
	) {
		this.user$ = this.afAuth.authState.pipe(
			switchMap((user: firebase.User) => {
				if(user) {
					return this.afs.doc<User>(`users/${user.uid}`).valueChanges().pipe(
						// tap(data => console.log("User: ", data)),
						shareReplay(1)
					)
				} else {
					return of(null)
				}
			})
		)
	}

	async sendEmailLink(email: string) {
		const actionCodeSettings = {
			url: this.baseURL,
			handleCodeInApp: true
		};

		if (email) {
			await this.afAuth.auth.sendSignInLinkToEmail(email, actionCodeSettings);
			localStorage.setItem('emailForSignIn', email);
		}
	}

	async verifyEmailLink(url: string) {
		if (this.afAuth.auth.isSignInWithEmailLink(url)) {
			let email = localStorage.getItem('emailForSignIn');
			if (!email) {
				email = this.winSvc.nativeWindow.prompt('Please confirm the email');
			}
			const result = await this.afAuth.auth.signInWithEmailLink(email, url);

			if (history && history.replaceState) {
				history.replaceState({}, document.title, url.split('?')[0]);
			}
			if (result.additionalUserInfo.isNewUser) {
				// show tutorial
			}
			localStorage.removeItem('emailForSignIn');
			return result;
		}
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
		this.afAuth.auth.signOut();
		// return this.router.navigate(['/'])
	}

	private async oAuthHandler(provider: auth.AuthProvider) {
		const result = await this.afAuth.auth.signInWithPopup(provider);
		// if (result) {
		// 	return this.router.navigate(['/']);
		// }
	}
}
