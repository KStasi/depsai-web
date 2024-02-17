export const StepOne = () => {
  return (
    <div className="table table-step">
      <h1 className="multistep-title">Step One</h1>
      <div className="multistep-form">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input className="form-input" type="text" id="amount" />
      </div>
    </div>
  );
};
