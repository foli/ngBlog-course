import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../user';
import { switchMap, tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.page.html',
	styleUrls: ['./user-profile.page.scss']
})
export class UserProfilePage implements OnInit {
	public user$: Observable<User>;

	constructor(
    private route: ActivatedRoute,
    public location: Location,
		public modalController: ModalController,
    private authSvc: AuthService,
    private userSvc: UserService
	) {}

	ngOnInit() {
    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(id)
    this.getUser()
  }
  
  getUser() {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.userSvc.getUser(params.get('id'))),
      tap(data => console.log("user: ", data))
    )
  }

	async update() {
		const modal = await this.modalController.create({
			component: UserUpdateComponent
		});
		return modal.present();
	}
}
