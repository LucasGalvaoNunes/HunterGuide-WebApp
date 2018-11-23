export class UsersModel {
  private _id: number;
  private _picture: string;
  private _name: string;
  private _lastName: string;
  private _aboutMe: string;
  private _userName: string;
  private _password: string;
  private _passwordRepeat: string;
  private _api_token: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get aboutMe(): string {
    return this._aboutMe;
  }

  set aboutMe(value: string) {
    this._aboutMe = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }


  get passwordRepeat(): string {
    return this._passwordRepeat;
  }

  set passwordRepeat(value: string) {
    this._passwordRepeat = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get api_token(): string {
    return this._api_token;
  }

  set api_token(value: string) {
    this._api_token = value;
  }

  get toObjectJson(){
    return
  }
}
