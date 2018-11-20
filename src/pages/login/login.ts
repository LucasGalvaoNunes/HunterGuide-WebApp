import { Component } from '@angular/core';
import {AlertController, App, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";
import {ApiEndPoint} from "../../utils/ApiEndPoint";
import {TabsPage} from "../tabs/tabs";
import { Storage } from '@ionic/storage';
import {UsersModel} from "../../models/UsersModel";
import {CreateUpdateUsersPage} from "../create-update-users/create-update-users";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user: UsersModel;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public usersProvider: UsersProvider,
              private storage: Storage,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private app: App) {
    this.user = new UsersModel();
  }

  loginForm(){
    console.log(this.user);
    let loading = this.loadingCtrl.create({
      content: 'Realizando login..'
    });
    loading.present();
    this.usersProvider.login({
      userName: this.user.userName,
      password: this.user.password
    }).then((value : any) => {
      if(value.status){
        this.storage.set(ApiEndPoint.STORAGE_TOKEN, value.data.api_token);
        this.app.getRootNav().setRoot(TabsPage);
      }
    }).catch((valueError:any) => {
      console.log(valueError);
      let alert = this.alertCtrl.create({
        title: 'Aviso!',
        subTitle: valueError.error.message,
        buttons: ['Ok']
      });
      alert.present();
    }).then(() => {
      loading.dismiss();
    });
  }

  createUser(){
    let createMdl = this.modalCtrl.create(CreateUpdateUsersPage, {isCreate: true});
    createMdl.onDidDismiss(data => {
      let alert = this.alertCtrl.create({
        title: 'Cadastro!',
        subTitle: data.message,
        buttons: ['Ok']
      });
      alert.present();
    });
    createMdl.present();
  }
}
