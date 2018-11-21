import { Component } from '@angular/core';
import {AlertController, App, ModalController, NavController, NavParams,} from 'ionic-angular';
import {UsersModel} from "../../models/UsersModel";
import {UsersProvider} from "../../providers/users/users";
import {LoginPage} from "../login/login";
import {Storage} from "@ionic/storage";
import {CreateUpdateUsersPage} from "../create-update-users/create-update-users";

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
              public storage: Storage,
              private app: App,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public usersProvider: UsersProvider) {
  }

  ionViewDidLoad() {
    this.loadUsers();
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Deslogar de sua conta?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Sim',
          handler: formData => {
            this.storage.clear();
            this.app.getRootNav().setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

  openEditProfile(){
    let createMdl = this.modalCtrl.create(CreateUpdateUsersPage, {
      isCreate: false,
      users: this.users
    });
    createMdl.onDidDismiss(value => {
      if(value != null && value.status){
          this.users = value.users;
          let alert = this.alertCtrl.create({
            title: 'Atualizado!',
            subTitle: value.message,
            buttons: ['Ok']
          });
          alert.present();
      }
    });
    createMdl.present();
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
