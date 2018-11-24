import { Component } from '@angular/core';
import {AlertController, App, ModalController, NavController, NavParams, normalizeURL, Platform,} from 'ionic-angular';
import {UsersModel} from "../../models/UsersModel";
import {UsersProvider} from "../../providers/users/users";
import {LoginPage} from "../login/login";
import {Storage} from "@ionic/storage";
import {CreateUpdateUsersPage} from "../create-update-users/create-update-users";
import { Camera } from '@ionic-native/camera';
import {Crop} from "@ionic-native/crop";
import {Base64} from "@ionic-native/base64";

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
              private camera: Camera,
              private base64: Base64,
              private crop: Crop,
              public platform: Platform,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public usersProvider: UsersProvider) {
  }

  ionViewDidLoad() {
    this.loadUsers();
  }


  // Return a promise to catch errors while loading image
  getProfileImage(): Promise<any> {
    let options: any = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetWidth: 300,
      targetHeight: 300,
    };
    // Get Image from ionic-native's built in camera plugin
    return this.camera.getPicture(options).then((fileUri) => {
        this.users.picture = 'data:image/jpeg;base64,' + fileUri;
        return this.usersProvider.updatePicture({
          base64: fileUri
        });
      }).then((val:any) => {
        if(val.status){
          let alert = this.alertCtrl.create({
            title: 'Foto do perfil atualizada!',
            buttons: ['Ok']
          });
          alert.present();
        }
    }).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'Não foi possivel atualizar a foto!',
        buttons: ['Ok']
      });
      alert.present();
    });
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
          this.users.picture = 'assets/imgs/user.png';
          console.log(this.users);
        }
      }).catch((valueError) => {
        console.log(valueError);
      })
  }
}
