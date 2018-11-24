import {Component, Input} from '@angular/core';
import {GuidesModel} from "../../models/GuidesModel";
import {GuidesPage} from "../../pages/guides/guides";
import {NavController} from "ionic-angular";

/**
 * Generated class for the GuidesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'guides',
  templateUrl: 'guides.html'
})
export class GuidesComponent {

  @Input() guides: GuidesModel;

  constructor(public navCtrl: NavController) {
  }

  openGuide(guide: GuidesModel){
    this.navCtrl.push(GuidesPage, {
      isGuide: true,
      guide: guide
    });
  }

}
