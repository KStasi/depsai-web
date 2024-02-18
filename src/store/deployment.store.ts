import { makeAutoObservable } from 'mobx';

interface FormData {
  amount: string;
  keys: string;
  values: string;
  minMemGib: number;
  minStorageGib: number;
  minCpuThreads: number;
  minCpuCores: number;
  budget: number;
}

export class DepStore {
  formData: FormData = {
    amount: '',
    keys: '',
    values: '',
    minMemGib: 50,
    minStorageGib: 20,
    minCpuThreads: 33,
    minCpuCores: 77,
    budget: 23
  };

  constructor() {
    makeAutoObservable(this);
  }

  setAmount(value: string) {
    this.formData.amount = value;
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

  handleSubmit() {
    console.log('Submitted:', this.formData);
  }
}

export const depStore = new DepStore();
