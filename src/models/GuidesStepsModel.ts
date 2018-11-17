export class GuidesStepsModel {
  private _id: number;
  private _fkSteps: number;
  private _fkGuides: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fkSteps(): number {
    return this._fkSteps;
  }

  set fkSteps(value: number) {
    this._fkSteps = value;
  }

  get fkGuides(): number {
    return this._fkGuides;
  }

  set fkGuides(value: number) {
    this._fkGuides = value;
  }
}
