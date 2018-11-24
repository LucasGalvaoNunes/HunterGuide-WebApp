import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {GamesModel} from "../../models/GamesModel";
import {StepsModel} from "../../models/StepsModel";
import {StepsProvider} from "../../providers/steps/steps";
import {isUndefined} from "ionic-angular/util/util";

/**
 * Generated class for the StepsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-steps',
  templateUrl: 'steps.html',
})
export class StepsPage {

  public title: string;
  public game: GamesModel;
  public idStepSelected: number = null;

  public steps: Array<StepsModel>;
  public lastPage : number;
  public currentPage: number;
  public paginate: boolean;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public stepsProvider: StepsProvider) {
    this.game = navParams.get('game');
    if(!isUndefined(navParams.get('idStepSelected')))
      this.idStepSelected = navParams.get('idStepSelected');
    if(!isUndefined(navParams.get('title')))
      this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    this.loadStepsList();
  }

  paginateStepsList(infiniteScroll){
    if(this.paginate){
      this.stepsProvider.stepsOfGame(this.game.id, this.idStepSelected, this.currentPage + 1)
        .then((value: any) => {
          if(value.status){
            this.currentPage = value.data.current_page;
            this.lastPage = value.data.last_page;
            this.paginate = this.currentPage < this.lastPage;
            this.steps = <Array<StepsModel>> value.data.data;
          }
        }).catch((errorValue) => {
        console.log(errorValue);
      }).then(()=>{
        infiniteScroll.complete();
      })
    }
  }

  updateStepsList(refresher) {
    this.currentPage = 1;
    this.loadStepsList();
    refresher.complete();
  }

  loadStepsList(){
    let loading = this.loadingCtrl.create({
      content: "Buscando dados"
    });
    loading.present();
    this.stepsProvider.stepsOfGame(this.game.id, this.idStepSelected, this.currentPage)
      .then((value: any) => {
        this.steps = [];
        this.paginate = true;
        this.lastPage = 1;
        this.currentPage = 1;
        if(value.status){
          this.steps = <Array<StepsModel>> value.data.data;
          this.currentPage = value.data.current_page;
          this.lastPage = value.data.last_page;
          this.paginate = this.currentPage < this.lastPage;
        }
      }).catch((errorValue) => {
      console.log(errorValue);
    }).then(()=>{
      loading.dismiss();
    });
  }



}
