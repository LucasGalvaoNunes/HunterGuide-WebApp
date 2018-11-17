import {Component, Input} from '@angular/core';
import {ConsolesModel} from "../../models/ConsolesModel";
import {NavController} from "ionic-angular";
import {GamesPage} from "../../pages/games/games";

/**
 * Generated class for the ConsoleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'console',
  templateUrl: 'console.html'
})
export class ConsoleComponent {

  @Input() console: ConsolesModel;

  constructor(public navCtrl: NavController) {

  }

  openGamesOfConsole(console: ConsolesModel){
    this.navCtrl.push(GamesPage, {
      console: console,
    });
  }

}
