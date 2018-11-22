export class GuidesModel {
  private _id: number;
  private _fkUsers: number;
  private _visualizations: number;
  private _title: string;
  private _pictureLink: string;
  private _text: string;


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

  get visualizations(): number {
    return this._visualizations;
  }

  set visualizations(value: number) {
    this._visualizations = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }


  get pictureLink(): string {
    return this._pictureLink;
  }

  set pictureLink(value: string) {
    this._pictureLink = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
