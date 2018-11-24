import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CategorysModel} from "../../models/CategorysModel";
import {Events, LoadingController, ModalController, NavController} from "ionic-angular";
import {CategorysPage} from "../../pages/categorys/categorys";
import {ConsolesModel} from "../../models/ConsolesModel";

/**
 * Generated class for the ToolbarCategorysComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toolbar-categorys',
  templateUrl: 'toolbar-categorys.html'
})
export class ToolbarCategorysComponent {

  public selectedCategory: CategorysModel;

  @Input() console: ConsolesModel;

  @Output() filterCategory = new EventEmitter();

  constructor(public loadingCtrl: LoadingController,
              public modalCtrl: ModalController,
              public navCtrl: NavController,
              private events: Events) {

    this.selectedCategory = new CategorysModel();
    this.selectedCategory.name = "Categoria";
    this.selectedCategory.isSelected = false;
  }

  openCategorys(){
    if(!this.selectedCategory.isSelected){
      let categorysMdl = this.modalCtrl.create(CategorysPage, {console: this.console});
      categorysMdl.onDidDismiss(data => {
        this.selectedCategory = data;
        this.filterCategory.emit(this.selectedCategory.id);
      });
      categorysMdl.present();
    }
  }

  clearCategorys(){
    this.selectedCategory = new CategorysModel();
    this.selectedCategory.isSelected = false;
    this.selectedCategory.name = "Categorias";
    this.filterCategory.emit(null);
  }
}
