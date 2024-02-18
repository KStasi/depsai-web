import { DeployParams, depsaiApi } from '@api';
import { makeAutoObservable } from 'mobx';

import { RootStore } from './root.store';

interface FormData {
  image: string;
  port: string;
  runCommand: string;
  keys: string;
  values: string;
  minMemGib: number;
  minStorageGib: number;
  minCpuThreads: number;
  minCpuCores: number;
  budget: number;
}

export class DepStore {
  goSteps = 0;

  setGoSteps(value: number) {
    console.log(this);
    console.log('value', value);
    this.goSteps = value;
  }

  formData: FormData = {
    image: '',
    keys: '',
    values: '',
    port: '',
    runCommand: '',
    minMemGib: 50,
    minStorageGib: 20,
    minCpuThreads: 33,
    minCpuCores: 77,
    budget: 23
  };

  constructor(private rootStore: RootStore) {
    makeAutoObservable(this);
  }

  setImage(value: string) {
    this.formData.image = value;
  }

  setPort(value: string) {
    this.formData.port = value;
  }

  setRunCommand(value: string) {
    this.formData.runCommand = value;
  }

  setKeys(value: string) {
    this.formData.keys = value;
  }

  setValues(value: string) {
    this.formData.values = value;
  }

  setMinMem(value: number) {
    this.formData.minMemGib = value;
  }

  setMinStorage(value: number) {
    this.formData.minStorageGib = value;
  }

  setMinCpuThreads(value: number) {
    this.formData.minCpuThreads = value;
  }

  setMinCpuCores(value: number) {
    this.formData.minCpuCores = value;
  }

  setBudget(value: number) {
    this.formData.budget = value;
  }

  async handleSubmit() {
    try {
      const params: DeployParams = {
        image: this.formData.image,
        user: this.rootStore.wagmiStore.account.address!,
        port: this.formData.port || '80',
        command: this.formData.runCommand,
        minMemGib: this.formData.minMemGib?.toString(),
        minStorageGib: this.formData.minStorageGib?.toString(),
        minCpuThreads: this.formData.minCpuThreads?.toString(),
        minCpuCores: this.formData.minCpuCores?.toString(),
        budget: this.formData.budget?.toString()
      };

      const { message } = await depsaiApi.deploy(params);

      this.rootStore.snackStore.success(message);
    } catch (e) {
      this.rootStore.snackStore.error((e as Error).message);
      throw e;
    }
  }
}
