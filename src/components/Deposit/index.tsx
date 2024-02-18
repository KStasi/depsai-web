import { useEffect, useState } from 'react';

import { depsaiApi } from '@api';
import { WagmiStore } from '@modules/wagmi';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  wagmi: WagmiStore
};

import QRCode from 'react-qr-code';

const DepositView: WithStores<typeof stores> = ({ wagmi }) => {
  const [buttonText, setButtonText] = useState('copy to clipboard');
  const [paymentAddress, setPaymentAddress] = useState('');

  const handleCopy = async () => {
    setButtonText('copied');

    try {
      await navigator.clipboard.writeText('238234u2o387or9h745h374895o28c47r29oa');

      setTimeout(() => {
        setButtonText('copy to clipboard');
      }, 1500);
    } catch (error) {
      console.error('Error copying: ', error);
    }
  };

  useEffect(() => {
    if (!wagmi.account.address) {
      return;
    }
    depsaiApi
      .getDepositAddress(wagmi.account.address)
      .then(address => {
        setPaymentAddress(address);
      })
      .catch(console.log);
  });

  return (
    <>
      <div className="form-content">
        <div className="table-container">
          <h4 className="form-header">Address</h4>
          <span className="form-info">
            Your current account address. Share it to receive funds.
          </span>
          <div className="form-link">{paymentAddress}</div>
          <button className="btn-copy" onClick={handleCopy}>
            {buttonText}
          </button>
          <span className="form-sublink">QRCode</span>
          <div className="form-qr-wrapper">
            <QRCode value={`ethereum:${paymentAddress}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export const Deposit = withStores(stores)(observer(DepositView));
