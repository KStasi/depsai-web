import { RootStore } from '@store';
import { makeAutoObservable } from 'mobx';

import { accountApiFactory } from './account-api';
import { publicClientToProvider, walletClientToSigner } from './adapters';
import { BatchAccountAPI } from './batch-simple-account-api';

export class AccountAbstractionStore {
  smartAccountApi?: BatchAccountAPI;
  smartAccountAddress?: `0x${string}`;

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  async init() {
    if (!this.rootStore.wagmiStore.walletClient) {
      return;
    }

    const provider = publicClientToProvider(this.rootStore.wagmiStore.publicClient);
    const signer = walletClientToSigner(this.rootStore.wagmiStore.walletClient);

    this.smartAccountApi = await accountApiFactory({
      provider,
      signer
    });

    this.smartAccountAddress = (await this.smartAccountApi.getAccountAddress()) as `0x${string}`;
  }
}
