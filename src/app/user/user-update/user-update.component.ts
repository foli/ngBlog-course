import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-user-update',
	templateUrl: './user-update.component.html',
	styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
	constructor(public modalController: ModalController) {}

	ngOnInit() {}

	updatePhotoURL(event: any) {
		console.log(event)
	}

	save() {
		console.log('save');
	}

	cancel() {
    this.modalController.dismiss()
		console.log('cancel');
	}
}
