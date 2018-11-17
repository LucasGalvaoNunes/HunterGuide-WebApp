import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {UsersModel} from "../../models/UsersModel";
import {FormControl, Validators, FormGroup, ValidatorFn, AbstractControl} from '@angular/forms';
import {UsersProvider} from "../../providers/users/users";

/**
 * Generated class for the CreateUpdateUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-create-update-users',
  templateUrl: 'create-update-users.html',
})
export class CreateUpdateUsersPage {

  public isCreate: boolean;

  public usersModel: UsersModel;
  public usersForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public viewCtrl: ViewController,
              public usersProvider: UsersProvider) {


    this.isCreate = this.navParams.get('isCreate');

    this.usersModel = new UsersModel();
    this.usersForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(75)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(75)]),
      aboutMe: new FormControl('', [Validators.maxLength(100)]),
      userName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(125)]),
      passwordRepeat: new FormControl('', [Validators.required, Validators.maxLength(125), this.equalto('password')]),
    });
  }

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;
      let isValid = control.root.value[field_name] == input;
      if (!isValid)
        return {'equalTo': {isValid}};
      else
        return null;
    };
  }

  ionViewDidLoad() {

  }

  submitForm(){
    if(this.isCreate){
      this.createNewUser();
    }else{
      this.updateUser();
    }
  }

  createNewUser(){
    let loading = this.loadingCtrl.create({
      content: "Realizando seu cadastro ..."
    });
    loading.present();
    this.usersProvider.create(this.usersModel.toObjectJson()).then((value:any) => {
      this.viewCtrl.dismiss(value);
    }).catch((errorValue) => {
      console.log(errorValue);
    }).then(()=>{
      loading.dismiss();
    });
  }

  updateUser(){
    let loading = this.loadingCtrl.create({
      content: "Realizando seu cadastro ..."
    });
    loading.present();
    this.usersProvider.update(this.usersModel.toObjectJson()).then((value:any) => {
      this.viewCtrl.dismiss(value);
    }).catch((errorValue) => {
      console.log(errorValue);
    }).then(()=>{
      loading.dismiss();
    });
  }

}
