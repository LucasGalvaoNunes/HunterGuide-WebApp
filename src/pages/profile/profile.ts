import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UsersModel} from "../../models/UsersModel";
import {UsersProvider} from "../../providers/users/users";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public users: UsersModel;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public usersProvider: UsersProvider) {
  }

  ionViewDidLoad() {
    this.loadUsers();
  }

  loadUsers(){
      this.usersProvider.profile().then((value: any) => {
        if(value.status){
          this.users = <UsersModel> value.data;
          console.log(this.users);
        }
      }).catch((valueError) => {
        console.log(valueError);
      })
  }
}
