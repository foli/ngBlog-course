import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

export const createUserAccount = functions
	.region('europe-west1')
	.runWith({ memory: '128MB', timeoutSeconds: 60 })
	.auth.user()
	.onCreate(event => {
		console.log('Event: ', event);

		const payload = {
			displayName: event.displayName,
			email: event.email,
			photoURL: event.photoURL,
			joined: event.metadata.creationTime,
			uid: event.uid
		};
		console.log('Payload: ', payload);

		const userRef = db.doc(`users/${event.uid}`);
		return userRef.set(payload);
	});
