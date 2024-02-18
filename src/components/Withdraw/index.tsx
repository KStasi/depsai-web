import { Dropdown } from '@components/Dropdown';

export const Withdraw = () => {
  return (
    <div className="form-content">
      <div className="table form-wrapper">
        <div className="form-grid-coin">
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
          <input className="form-input" type="text" id="amount" />
          <Dropdown />
        </div>
        <button className="btn btn-secondary btn-withdraw">Withdraw</button>
      </div>
    </div>
  );
};
