import {Component, Input} from '@angular/core';
import {StepsModel} from "../../models/StepsModel";
import {LoadingController, NavController} from "ionic-angular";
import {StepsProvider} from "../../providers/steps/steps";
import {StepsPage} from "../../pages/steps/steps";
import {GamesModel} from "../../models/GamesModel";
import {GuidesPage} from "../../pages/guides/guides";

/**
 * Generated class for the StepsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'steps',
  templateUrl: 'steps.html'
})
export class StepsComponent {

  @Input() steps: StepsModel;
  @Input() game: GamesModel;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public stepsProvider: StepsProvider) {
  }

  openMoreStepsOrGuide(step: StepsModel){
    this.stepsProvider.stepsOfGame(this.game.id, step.id).then((value: any) => {
      if(value.status)
        this.navCtrl.push(StepsPage, {
          game: this.game,
          title: step.name,
          idStepSelected: step.id
        });
    }).catch((errorValue : any) => {
      if(!errorValue.error.status){
        this.navCtrl.push(GuidesPage, {
          step: step
        });
      }
    })
  }
}
