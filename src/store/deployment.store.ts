import { makeAutoObservable } from 'mobx';

export class DepStore {
  keys = '';
  values = '';

  constructor() {
    makeAutoObservable(this);
  }

  setKeys(value: string) {
    this.keys = value;
  }

  setValues(value: string) {
    this.values = value;
  }
}
