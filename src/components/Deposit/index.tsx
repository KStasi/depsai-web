import { useState } from 'react';

import QRCode from 'react-qr-code';

export const Deposit = () => {
  const [buttonText, setButtonText] = useState('copy to clipboard');

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

  return (
    <>
      <div className="form-content">
        <div className="table-container">
          <h4 className="form-header">Address</h4>
          <span className="form-info">
            Your current account address. Share it to receive funds.
          </span>
          <div className="form-link">238234u2o387or9h745h374895o28c47r29o</div>
          <button className="btn-copy" onClick={handleCopy}>
            {buttonText}
          </button>
          <span className="form-sublink">QRCode</span>
          <div className="form-qr-wrapper">
            <QRCode value="https://akash.network/docs/architecture/overview/" />
          </div>
        </div>
      </div>
    </>
  );
};
