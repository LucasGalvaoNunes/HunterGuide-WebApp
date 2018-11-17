import { Component, Input } from '@angular/core';
import {GamesModel} from "../../models/GamesModel";
import {NavController} from "ionic-angular";
import {StepsPage} from "../../pages/steps/steps";

/**
 * Generated class for the GamesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'games',
  templateUrl: 'games.html'
})
export class GamesComponent {

  @Input() games: GamesModel;

  constructor(public navCtrl: NavController) {

  }

  openStepsOfGame(game: GamesModel){
    this.navCtrl.push(StepsPage, {
      game: game,
      title: game.name
    });
  }
}
