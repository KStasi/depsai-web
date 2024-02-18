import { Dropdown, options } from '@components/Dropdown';
import { depsaiApi } from '@api';
import { useState } from 'react';
import { WagmiStore } from '@modules/wagmi';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  wagmi: WagmiStore
};

/* TODO: use state for amounts */
// <input className="form-input" type="text" id="amount"  amount={amount} onChange={(e) => setAmount(e.target.value)}/>

const WithdrawView: WithStores<typeof stores> = ({ wagmi }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [amount, setAmount] = useState('0');

  const handleClick = async () => {
    if (!wagmi.account.address) return;
    await depsaiApi.withdraw(wagmi.account.address, selectedOption.value, amount);
  };

  return (
    <div className="form-content">
      <div className="table form-wrapper">
        <label className="form-label" htmlFor="amount">
          Amount
          <input
            className="form-input"
            type="string"
            id="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </label>
        <Dropdown selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
        <button className="btn btn-secondary btn-withdraw" onClick={handleClick}>
          Withdraw
        </button>
      </div>
    </div>
  );
};

export const Withdraw = withStores(stores)(observer(WithdrawView));
