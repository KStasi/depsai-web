export const Withdraw = () => {
  return (
    <>
      <button className="btn-link">
        <i className="btn-icon icon-back" />
        back
      </button>
      <label className="form-label" htmlFor="amount">
        Amount
      </label>
      <input className="form-input" type="text" id="amount" />
    </>
  );
};
