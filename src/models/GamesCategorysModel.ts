export class GamesCategorysModel {
  private _id: number;
  private _fkGames: number;
  private _fkCategorys: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fkGames(): number {
    return this._fkGames;
  }

  set fkGames(value: number) {
    this._fkGames = value;
  }

  get fkCategorys(): number {
    return this._fkCategorys;
  }

  set fkCategorys(value: number) {
    this._fkCategorys = value;
  }
}
