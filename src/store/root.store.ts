import { ColorModeStore } from '@modules/color-mode';
import { BalancesStore, WagmiStore } from '@modules/wagmi';
import { ConstructorOfValues } from '@types';
import { makeAutoObservable } from 'mobx';

import { DepStore } from './deployment.store';
import { SnackStore } from './snack.store';

export class RootStore {
  static map: Map<ConstructorOfValues<RootStore>, keyof RootStore> = new Map();

  //#region examples
  // userStore = new UserStore();
  // counterStore = new CounterStore();
  //#endregion

  //#region modules
  colorModeStore = new ColorModeStore();
  wagmiStore = new WagmiStore();
  balancesStore = new BalancesStore();
  depStore = new DepStore(this);
  //#endregion

  snackStore = new SnackStore();

  constructor() {
    makeAutoObservable(this);

    this.depStore = new DepStore(this);

    for (const [key, value] of Object.entries(this)) {
      RootStore.map.set(value.constructor.prototype.constructor, key as keyof RootStore);
    }
  }
}
