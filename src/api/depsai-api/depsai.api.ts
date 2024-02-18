// const apiHost = 'http://localhost:3000';
const apiHost = process.env.REACT_APP_API_HOST;

export class DepsaiApi {
  async getDepositAddress(user: string): Promise<`0x${string}`> {
    const response = await fetch(`${apiHost}/deposit?user=${user}`);
    return (await response.text()) as `0x${string}`;
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
