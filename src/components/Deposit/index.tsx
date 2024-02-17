import qr from '../../assets/images/qr.png';

export const Deposit = () => {
  return (
    <div className="form-content">
      <div className="table-container">
        <h4 className="form-header">Address</h4>
        <span className="form-info">Your current account address. Share it to receive funds.</span>
        <div className="form-link">238234u2o387or9h745h374895o28c47r29o</div>
        <button className="btn-copy">copy to clipboard</button>
        <span className="form-sublink">QRCode</span>
        <div className="form-qr-wrapper">
          <img src={qr} alt="qr" className="form-qr" />
        </div>
      </div>
    </div>
  );
};
