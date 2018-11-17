import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApiEndPoint} from "../../utils/ApiEndPoint";
import { Storage } from '@ionic/storage';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient, private storage:Storage) {
  }

  profile(){
    return new Promise((resolve, reject)  => {
      this.storage.get(ApiEndPoint.STORAGE_TOKEN).then((value)=>{
        let token = value;
        this.http.get(ApiEndPoint.USERS_PROFILE ,{headers: {
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

  login(dados){
    return new Promise((resolve, reject)  => {
      this.http.post(ApiEndPoint.USERS_LOGIN, JSON.stringify(dados) ,{headers: {
          'Content-Type': 'application/json',
        }}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  create(dados){
    return new Promise((resolve, reject)  => {
      this.http.post(ApiEndPoint.USERS_CREATE, JSON.stringify(dados) ,{headers: {
          'Content-Type': 'application/json',
        }}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  update(dados){
    return new Promise((resolve, reject)  => {
      this.storage.get(ApiEndPoint.STORAGE_TOKEN).then((value)=>{
        let token = value;
        this.http.post(ApiEndPoint.USERS_UPDATE, JSON.stringify(dados) ,{headers: {
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
