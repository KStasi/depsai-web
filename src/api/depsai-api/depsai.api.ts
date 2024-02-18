// const apiHost = 'http://localhost:3000';
const apiHost = import.meta.env.VITE_API_HOST;

export type DeploymentDetails = {
  package: string;
  command: string;
  port: string;
  minMemGib?: string;
  minStorageGib?: string;
  minCpuThreads?: string;
  minCpuCores?: string;
  budget?: string;
  link: string;
};
export class DepsaiApi {
  async getDepositAddress(user: string): Promise<`0x${string}`> {
    const response = await fetch(`${apiHost}/deposit?user=${user}`);
    return (await response.text()) as `0x${string}`;
  }

  async getDeployments(user: string): Promise<DeploymentDetails[]> {
    const response = await fetch(`${apiHost}/deployments?user=${user}`);
    return await response.json();
  }

  // dev: amount in token units
  async withdraw(user: string, asset: string, amount: string): Promise<string> {
    const response = await fetch(`${apiHost}/withdraw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user, asset, amount })
    });
    return await response.text();
  }

  async deploy(image: string): Promise<string> {
    const response = await fetch(`${apiHost}/deploy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image })
    });
    return await response.text();
  }
}

export const depsaiApi = new DepsaiApi();
