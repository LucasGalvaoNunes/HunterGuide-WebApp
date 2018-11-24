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
  public buttonName: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public viewCtrl: ViewController,
              public usersProvider: UsersProvider) {


    this.isCreate = this.navParams.get('isCreate');
    if(!this.isCreate){
      this.buttonName = "Atualizar";
      this.usersModel = this.navParams.get('users');
    }else{
      this.usersModel = new UsersModel();
      this.buttonName = "Cadastrar";
    }


    this.usersForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(75)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(75)]),
      aboutMe: new FormControl('', [Validators.maxLength(100)]),
      userName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    });
    if(this.isCreate){
      this.usersForm.addControl('password',new FormControl('', [Validators.required, Validators.maxLength(125)]));
      this.usersForm.addControl('passwordRepeat',new FormControl('', [Validators.required, Validators.maxLength(125), this.equalto('password')]));
    }else{
      this.usersForm.addControl('password',new FormControl('', [Validators.maxLength(125)]));
      this.usersForm.addControl('passwordRepeat',new FormControl('', [Validators.maxLength(125), this.equalto('password')]));
    }
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
    this.usersProvider.create({
      name: this.usersModel.name,
      lastName: this.usersModel.lastName,
      aboutMe: this.usersModel.aboutMe,
      userName: this.usersModel.userName,
      password: this.usersModel.password,
      passwordRepeat: this.usersModel.password
    }).then((value:any) => {
      this.viewCtrl.dismiss({
        message: value.status ? "Usuario atualizado com sucesso!" : "Não foi possivel atualizar seus dados",
        status: value.status
      });
    }).catch((errorValue) => {
      console.log(errorValue);
    }).then(()=>{
      loading.dismiss();
    });
  }

  updateUser(){
    console.log('Atualizar');
    let loading = this.loadingCtrl.create({
      content: "Atualizando seus dados ..."
    });
    loading.present();
    let dados = {
      name: this.usersModel.name,
      lastName: this.usersModel.lastName,
      aboutMe: this.usersModel.aboutMe,
      userName: this.usersModel.userName,
    };

    this.usersProvider.update(dados).then((value:any) => {
      this.viewCtrl.dismiss({
        users: this.usersModel,
        message: value.status ? "Usuario atualizado com sucesso!" : "Não foi possivel atualizar seus dados",
        status: value.status
      });
    }).catch((errorValue) => {
      console.log(errorValue);
    }).then(()=>{
      loading.dismiss();
    });
  }

}
