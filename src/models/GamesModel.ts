export class GamesModel {
  private _id: number;
  private _name: string;
  private _pictureLink: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get pictureLink(): string {
    return this._pictureLink;
  }

  set pictureLink(value: string) {
    this._pictureLink = value;
  }
}
