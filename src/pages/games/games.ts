import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {ConsolesModel} from "../../models/ConsolesModel";
import {GamesModel} from "../../models/GamesModel";
import {GamesProvider} from "../../providers/games/games";

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
})
export class GamesPage {

  public console: ConsolesModel;
  public idCategory: number;

  public games: Array<GamesModel>;

  public lastPage : number;
  public currentPage: number;
  public paginate: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public gamesProvider: GamesProvider) {
    this.console = navParams.get('console');
    this.idCategory = null;
  }

  ionViewDidLoad() {
    this.loadGamesList();
  }

  setCategorySelected(data){
    console.log("FILTRA POR CATEGORIA");
    this.idCategory = data;
    this.currentPage = 1;
    this.loadGamesList();
  }

  paginateGamesList(infiniteScroll){
    if(this.paginate){
      this.gamesProvider.ofConsole({idConsole: this.console.id, idCategorys: this.idCategory}, this.currentPage + 1)
        .then((value: any) => {
        if(value.status){
          this.currentPage = value.data.current_page;
          this.lastPage = value.data.last_page;
          this.paginate = this.currentPage < this.lastPage;
          for (let i = 0; i < value.data.data.length; i++) {
            this.games.push(<GamesModel>value.data.data[i]);
          }
        }
      }).catch((errorValue) => {
        console.log(errorValue);
      }).then(()=>{
        infiniteScroll.complete();
      })
    }
  }

  updateGamesList(refresher) {
    this.currentPage = 1;
    this.loadGamesList();
    refresher.complete();
  }

  loadGamesList(){
    let loading = this.loadingCtrl.create({
      content: "Buscando dados"
    });
    loading.present();
    this.gamesProvider.ofConsole({idConsole: this.console.id, idCategorys: this.idCategory}, this.currentPage)
      .then((value: any) => {
      this.games = [];
      this.paginate = true;
      this.lastPage = 1;
      this.currentPage = 1;
      if(value.status){
        this.games = <Array<GamesModel>> value.data.data;
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
