import { Dropdown } from '@components/Dropdown';

export const Withdraw = () => {
  return (
    <div className="form-content">
      <div className="table form-wrapper">
        <label className="form-label" htmlFor="amount">
          Amount
          <input className="form-input" type="text" id="amount" />
        </label>
        <Dropdown />
        <button className="btn btn-secondary btn-withdraw">Withdraw</button>
      </div>
    </div>
  );
};
