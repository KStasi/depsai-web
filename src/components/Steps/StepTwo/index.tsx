export const StepTwo = () => {
  return (
    <div className="table table-step">
      <h1 className="multistep-title">Step Two</h1>
      <span className="multistep-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, maxime!
      </span>
      <div className="multistep-form-grid">
        <label className="form-label form-label-sm" htmlFor="amount">
          Keys
          <input className="form-input" type="text" id="amount" />
        </label>
        <label className="form-label form-label-sm" htmlFor="amount">
          Values
          <input className="form-input" type="text" id="amount" />
        </label>
        <i className="btn-add">+</i>
      </div>
    </div>
  );
};
