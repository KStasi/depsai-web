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
  status: string;
  generatedId?: string;
};

export type DeployParams = {
  image: string;
  user: string;
  port: string;
  command: string;
  minMemGib?: string;
  minStorageGib?: string;
  minCpuThreads?: string;
  minCpuCores?: string;
  budget?: string;
  envs?: { [key: string]: string };
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

  async deploy(params: DeployParams): Promise<{
    message: string;
  }> {
    const response = await fetch(`${apiHost}/deploy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    return await response.json();
  }
}

export const depsaiApi = new DepsaiApi();
