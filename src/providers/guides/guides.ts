import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiEndPoint} from "../../utils/ApiEndPoint";
import { Storage } from '@ionic/storage';

/*
  Generated class for the GuidesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GuidesProvider {

  constructor(public http: HttpClient, private storage: Storage) {
  }

  guideOfStep(idStep: number){
    return new Promise((resolve, reject)  => {
      this.storage.get(ApiEndPoint.STORAGE_TOKEN).then((value)=>{
        let token = value;
        this.http.get(ApiEndPoint.GUIDE_OF_STEP + idStep,{headers: {
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

  allFavorites(pagina:number = 1){
    return new Promise((resolve, reject)  => {
      this.storage.get(ApiEndPoint.STORAGE_TOKEN).then((value)=>{
        let token = value;
        this.http.get(ApiEndPoint.GUIDE_FAVORITES + "?page=" + pagina,{headers: {
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

  favorite(id:number){
    return new Promise((resolve, reject)  => {
      this.storage.get(ApiEndPoint.STORAGE_TOKEN).then((value)=>{
        let token = value;
        this.http.get(ApiEndPoint.GUIDE_SAVE_FAVORITES + id,{headers: {
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
