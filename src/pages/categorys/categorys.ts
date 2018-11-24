import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {CategorysModel} from "../../models/CategorysModel";
import {ConsolesModel} from "../../models/ConsolesModel";
import {CategorysProvider} from "../../providers/categorys/categorys";

/**
 * Generated class for the CategorysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categorys',
  templateUrl: 'categorys.html',
})
export class CategorysPage {

  public selectedCategory: CategorysModel;
  public console: ConsolesModel;

  public categorys: Array<CategorysModel>;
  public lastPage : number;
  public currentPage: number;
  public paginate: boolean;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public categorysProvider: CategorysProvider) {
    this.console = this.navParams.get('console');
  }

  ionViewDidLoad() {
    this.loadCategorysList();
  }

  close(categoria: CategorysModel){
    if(categoria == null){
      this.selectedCategory = new CategorysModel();
      this.selectedCategory.name = "Categoria";
      this.selectedCategory.isSelected = false;
    }else{
      this.selectedCategory = categoria;
      this.selectedCategory.isSelected = true;
    }

    this.viewCtrl.dismiss(this.selectedCategory);
  }


  paginateCategorysList(infiniteScroll){
    if(this.paginate){
      this.categorysProvider.ofConsole(this.console.id, this.currentPage + 1)
        .then((value: any) => {
          if(value.status){
            this.currentPage = value.data.current_page;
            this.lastPage = value.data.last_page;
            this.paginate = this.currentPage < this.lastPage;
            for (let i = 0; i < value.data.data.length; i++) {
              this.categorys.push(<CategorysModel>value.data.data[i]);
            }
          }
        }).catch((errorValue) => {
        console.log(errorValue);
      }).then(()=>{
        infiniteScroll.complete();
      })
    }
  }

  updateCategorysList(refresher) {
    this.currentPage = 1;
    this.loadCategorysList();
    refresher.complete();
  }

  loadCategorysList(){
    let loading = this.loadingCtrl.create({
      content: "Buscando dados"
    });
    loading.present();
    this.categorysProvider.ofConsole(this.console.id, this.currentPage)
      .then((value: any) => {
        this.categorys = [];
        this.paginate = true;
        this.lastPage = 1;
        this.currentPage = 1;
        if(value.status){
          this.categorys = <Array<CategorysModel>> value.data.data;
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
