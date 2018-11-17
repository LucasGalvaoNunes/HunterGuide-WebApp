import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiEndPoint} from "../../utils/ApiEndPoint";
import { Storage } from '@ionic/storage';

/*
  Generated class for the GamesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamesProvider {

  constructor(public http: HttpClient, private storage:Storage) {
  }

  ofConsole(filter: any, pagina:number = 1){
    return new Promise((resolve, reject)  => {
      this.storage.get(ApiEndPoint.STORAGE_TOKEN).then((value)=>{
        let token = value;
        this.http.post(ApiEndPoint.GAMES_OF_CONSOLE + "?page=" + pagina,JSON.stringify(filter),{headers: {
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
