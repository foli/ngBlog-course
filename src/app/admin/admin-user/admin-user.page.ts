import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/user/user';
import { tap, map } from 'rxjs/operators';

@Component({
	selector: 'app-admin-user',
	templateUrl: './admin-user.page.html',
	styleUrls: ['./admin-user.page.scss']
})
export class AdminUserPage implements OnInit, OnDestroy {
	public users$: Observable<User[]>;
	// public users: User[];
	// private usersSub: Subscription;

	constructor(private userSvc: UserService) {}

	ngOnInit() {
		this.users$ = this.userSvc.getUsers();
		// this.getUsers();
		// this.getQuery();
	}

	ngOnDestroy() {
		// this.usersSub.unsubscribe();
	}

	// getUsers() {
	// 	this.usersSub = this.userSvc
	// 		.getUsers()
	// 		.pipe(tap(data => console.log('valueChanges: ', data)))
	// 		.subscribe(data => (this.users = data));
	// }

	// getQuery() {
	// 	this.userSvc
	// 		.getQuery()
	// 		.pipe(
	// 			tap(data => console.log('snapshotChanges: ', data)),
	// 			map(query =>
	// 				query.map(snap => {
	// 					const data = snap.payload.doc.data();
	// 					const id = snap.payload.doc.id;
	// 					return { id, ...data };
	// 				})
	// 			),
	// 			tap(data => console.log('snapshotChanges: ', data))
	// 		)
	// 		.subscribe();
	// }
}
