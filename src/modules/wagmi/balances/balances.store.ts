import { SupportedChainId, supportedTokens } from '@modules/wagmi/config';
import { makeAutoObservable } from 'mobx';
import { getNetwork, getAccount, fetchBalance, watchNetwork, watchAccount } from 'wagmi/actions';

import { Account, Network, Token } from '../types';

export class BalancesStore {
  balances: Map<Token, string> = new Map();
  network: Network;
  account: Account;

  get tokens() {
    return Array.from(this.balances.keys());
  }

  getBalance(token: Token) {
    return this.balances.get(token);
  }

  constructor() {
    makeAutoObservable(this);

    this.init();
  }

  init() {
    this.initNetwork();
    this.initAccount();
  }

  initAccount() {
    this.account = getAccount();

    watchAccount(account => {
      this.account = account;
    });
  }

  initNetwork() {
    this.network = getNetwork();

    this.updateAllBalances(this.network);

    watchNetwork(network => {
      this.network = network;

      this.updateAllBalances(network);
    });
  }

  updateAllBalances(network: Network) {
    if (!network.chain) {
      return;
    }
    supportedTokens[network.chain.id as SupportedChainId].forEach(async token => {
      await this.updateBalance(token);
    });
  }

  async updateBalance(token: Token) {
    if (!this.network.chain || !this.account?.address) {
      return;
    }

    const address = this.account.address;

    const balance = await fetchBalance({
      address,
      token: token.address
    });

    this.balances.set(token, balance.formatted);
  }
}
