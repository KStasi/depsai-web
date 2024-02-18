interface StepOneProps {
  next: () => void;
}

export const StepOne: React.FC<StepOneProps> = ({ next }) => {
  return (
    <div className="table table-step">
      <h1 className="multistep-title">Step One</h1>
      <div className="multistep-form">
        <label className="form-label" htmlFor="amount">
          Amount
          <input className="form-input" type="text" id="amount" />
        </label>
      </div>
      <button className="btn-copy" onClick={() => next()}>
        next
      </button>
    </div>
  );
};
