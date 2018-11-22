import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {StepsModel} from "../../models/StepsModel";
import {GuidesProvider} from "../../providers/guides/guides";
import {GuidesModel} from "../../models/GuidesModel";

/**
 * Generated class for the GuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-guides',
  templateUrl: 'guides.html',
})
export class GuidesPage {

  public step: StepsModel;

  public isGuide: boolean;
  public guide: GuidesModel;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public guidesProvider: GuidesProvider) {
    this.step = navParams.get('step');
    this.isGuide = navParams.get('isGuide');
    if(this.isGuide){
      this.guide = this.navParams.get('guide');
    }
  }

  ionViewDidLoad() {
    if(!this.isGuide){
      this.loadGuide();
    }
  }

  loadGuide(){
    let loading = this.loadingCtrl.create({
      content: "Buscando dados"
    });
    loading.present();
    this.guidesProvider.guideOfStep(this.step.id).then((value : any) =>{
      if(value.status){
        this.guide = <GuidesModel> value.data;
      }
    }).catch((errorValue : any) => {
      console.log('Deu Merad!');
    }).then(()=>{
      loading.dismiss();
    })

  }

  favorite(){
    let loading = this.loadingCtrl.create({
      content: "Salvando nos favoritos"
    });
    loading.present();
    this.guidesProvider.favorite(this.guide.id).then((value : any) =>{
      if(value.status){
        let alert = this.alertCtrl.create({
          title: 'Salvo em seus favoritos!',
          buttons: ['Ok']
        });
        alert.present();
      }
    }).catch((errorValue : any) => {
      console.log('Deu Merad!');
    }).then(()=>{
      loading.dismiss();
    })
  }

}
