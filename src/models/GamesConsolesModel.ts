export class GamesConsolesModel {
  private _id: number;
  private _fkGames: number;
  private _fkConsoles: number;


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

  get fkConsoles(): number {
    return this._fkConsoles;
  }

  set fkConsoles(value: number) {
    this._fkConsoles = value;
  }
}
