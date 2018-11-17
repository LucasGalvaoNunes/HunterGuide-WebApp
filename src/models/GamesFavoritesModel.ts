export class GamesFavoritesModel {
  private _id: number;
  private _fkUsers: number;
  private _fkGames: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fkUsers(): number {
    return this._fkUsers;
  }

  set fkUsers(value: number) {
    this._fkUsers = value;
  }

  get fkGames(): number {
    return this._fkGames;
  }

  set fkGames(value: number) {
    this._fkGames = value;
  }
}
