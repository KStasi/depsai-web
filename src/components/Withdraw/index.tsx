export const Withdraw = () => {
  return (
    <div className="form-content">
      <div className="table form-wrapper">
        <button className="btn-link">
          <i className="btn-icon icon-back" />
          back
        </button>
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input className="form-input" type="text" id="amount" />
      </div>
    </div>
  );
};
