interface StepTwoProps {
  next: () => void;
  prev: () => void;
}

export const StepTwo: React.FC<StepTwoProps> = ({ next, prev }) => {
  return (
    <div className="table table-step">
      <h1 className="multistep-title">Step Two</h1>
      <span className="multistep-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, maxime!
      </span>
      <div className="multistep-form-grid">
        <label className="form-label form-label-sm" htmlFor="keys">
          Keys
          <input className="form-input" type="text" id="keys" />
        </label>
        <label className="form-label form-label-sm" htmlFor="values">
          Values
          <input className="form-input" type="text" id="values" />
        </label>
        <i className="btn-add">+</i>
      </div>
      <div className="btn-copy-container">
        <button className="btn-copy" onClick={() => prev()}>
          prev
        </button>
        <button className="btn-copy" onClick={() => next()}>
          next
        </button>
      </div>
    </div>
  );
};
