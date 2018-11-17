export class GuidesFavoritesModel {
  private _id: number;
  private _fkUsers: number;
  private _fkGuides: number;


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

  get fkGuides(): number {
    return this._fkGuides;
  }

  set fkGuides(value: number) {
    this._fkGuides = value;
  }
}
