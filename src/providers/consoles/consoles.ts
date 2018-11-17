import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiEndPoint} from "../../utils/ApiEndPoint";
import { Storage } from '@ionic/storage';

/*
  Generated class for the ConsolesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsolesProvider {

  constructor(public http: HttpClient, private storage: Storage) {
  }

  allConsoles(pagina:number = 1){
    return new Promise((resolve, reject)  => {
      this.storage.get(ApiEndPoint.STORAGE_TOKEN).then((value)=>{
        let token = value;
        this.http.get(ApiEndPoint.CONSOLES_ALL + "?page=" + pagina,{headers: {
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
