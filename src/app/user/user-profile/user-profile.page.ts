import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserUpdateComponent } from '../user-update/user-update.component';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit, OnDestroy {
	public user$: Observable<User>
  // public user: User
  // private userSub$: Subscription

  constructor(public modalController: ModalController, private authSvc: AuthService) { }

  ngOnInit() {
    this.user$ = this.authSvc.user$
    // this.userSub$ = this.authSvc.user$.subscribe(u => {
    //   this.user = u
    // })
  }

  ngOnDestroy() {
    // this.userSub$.unsubscribe()
  }

  async update() {
    const modal = await this.modalController.create({
      component: UserUpdateComponent
    })
    return modal.present()
  }
}
