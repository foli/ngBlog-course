import { Injectable } from '@angular/core';
import {
	AngularFirestore,
	AngularFirestoreCollection,
	DocumentChangeAction
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private usersCollection: AngularFirestoreCollection<User>;

	constructor(private afs: AngularFirestore) {
		this.usersCollection = this.afs.collection<User>('users');
	}

	getUsers(): Observable<User[]> {
		return this.usersCollection.valueChanges();
	}

	getQuery(): Observable<DocumentChangeAction<User>[]> {
		return this.usersCollection.snapshotChanges();
	}

	getUser(uid: string): Observable<User> {
		return this.usersCollection.doc<User>(uid).valueChanges();
	}
}
