import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {ConsolesProvider} from "../../providers/consoles/consoles";
import {ConsolesModel} from "../../models/ConsolesModel";
import {GamesPage} from "../games/games";

/**
 * Generated class for the ConsolesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-consoles',
  templateUrl: 'consoles.html',
})
export class ConsolesPage {

  public consoles: Array<ConsolesModel>;

  public lastPage : number;
  public currentPage: number;
  public paginate: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public consolesProvider: ConsolesProvider) {
  }

  ionViewDidLoad() {
    this.loadConsolesList();
  }

  paginateConsolesList(infiniteScroll){
    if(this.paginate){
      this.consolesProvider.allConsoles(this.currentPage + 1).then((value: any) => {
        if(value.status){
          this.currentPage = value.data.current_page;
          this.lastPage = value.data.last_page;
          this.paginate = this.currentPage < this.lastPage;
          for (let i = 0; i < value.data.data.length; i++) {
            this.consoles.push(<ConsolesModel>value.data.data[i]);
          }
        }
      }).catch((errorValue) => {
        console.log(errorValue);
      }).then(()=>{
        infiniteScroll.complete();
      })
    }
  }

  updateConsolesList(refresher) {
    this.currentPage = 1;
    this.loadConsolesList();
    refresher.complete();
  }

  loadConsolesList(){
    let loading = this.loadingCtrl.create({
      content: "Buscando dados"
    });
    loading.present();
    this.consolesProvider.allConsoles(this.currentPage).then((value: any) => {
      this.consoles = [];
      this.paginate = true;
      this.lastPage = 1;
      this.currentPage = 1;
      if(value.status){
        this.consoles = <Array<ConsolesModel>> value.data.data;
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

  openGamesOfConsole(console: ConsolesModel){
    this.navCtrl.push(GamesPage, {
      console: console,
    });
  }
}
