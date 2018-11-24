import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {ConsolesModel} from "../../models/ConsolesModel";
import {ConsolesProvider} from "../../providers/consoles/consoles";
import {GuidesModel} from "../../models/GuidesModel";
import {GuidesProvider} from "../../providers/guides/guides";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  public guidesFav: Array<GuidesModel>;

  public lastPage : number;
  public currentPage: number;
  public paginate: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public guidesProvider: GuidesProvider) {
  }

  ionViewDidLoad() {
    this.loadGuidesFavList();
  }

  paginateGuidesFavList(infiniteScroll){
    if(this.paginate){
      this.guidesProvider.allFavorites(this.currentPage + 1).then((value: any) => {
        if(value.status){
          this.currentPage = value.data.current_page;
          this.lastPage = value.data.last_page;
          this.paginate = this.currentPage < this.lastPage;
          for (let i = 0; i < value.data.data.length; i++) {
            this.guidesFav.push(<GuidesModel>value.data.data[i]);
          }
        }
      }).catch((errorValue) => {
        console.log(errorValue);
      }).then(()=>{
        infiniteScroll.complete();
      })
    }
  }

  updateGuidesFavList(refresher) {
    this.currentPage = 1;
    this.loadGuidesFavList();
    refresher.complete();
  }

  loadGuidesFavList(){
    let loading = this.loadingCtrl.create({
      content: "Buscando dados"
    });
    loading.present();
    this.guidesProvider.allFavorites(this.currentPage).then((value: any) => {
      this.guidesFav = [];
      this.paginate = true;
      this.lastPage = 1;
      this.currentPage = 1;
      if(value.status){
        this.guidesFav = <Array<GuidesModel>> value.data.data;
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
