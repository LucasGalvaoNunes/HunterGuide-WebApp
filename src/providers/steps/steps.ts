import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiEndPoint} from "../../utils/ApiEndPoint";
import { Storage } from '@ionic/storage';

/*
  Generated class for the StepsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StepsProvider {

  constructor(public http: HttpClient, private storage: Storage) {
  }

  stepsOfGame(idGame: number, idStep: number, pagina:number = 1){
    return new Promise((resolve, reject)  => {
      this.storage.get(ApiEndPoint.STORAGE_TOKEN).then((value)=>{
        let token = value;
        let url = ApiEndPoint.STEPS_OF_GAME + idGame;
        if(idStep != null)
          url += "/" + idStep;
        url += "?page=" + pagina;
        console.log(url);
        this.http.get(url,{headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }}).subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
      });
    });
  }

}
