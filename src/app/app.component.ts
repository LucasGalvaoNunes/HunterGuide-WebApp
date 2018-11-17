import { Component } from '@angular/core';
import {LoadingController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import {UsersProvider} from "../providers/users/users";
import {ApiEndPoint} from "../utils/ApiEndPoint";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              usersProvider: UsersProvider,
              loadingController: LoadingController,
              public storage: Storage) {


    platform.ready().then(() => {
      let loading = loadingController.create({
        content: 'Aguarde um pouco, estamos carregando tudo para você'
      });
      loading.present();
      this.storage.get(ApiEndPoint.STORAGE_TOKEN).then((value) => {
        if(value != null){
          this.rootPage = TabsPage;
        }else{
          this.rootPage = LoginPage;
        }
        loading.dismiss();
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.overlaysWebView(false);
      statusBar.backgroundColorByHexString('#260e04');

      splashScreen.hide();
    });
  }
}
