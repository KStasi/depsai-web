interface StepThreeProps {
  next: () => void;
  prev: () => void;
}

export const StepThree: React.FC<StepThreeProps> = ({ next, prev }) => {
  return (
    <div className="table table-step">
      <h1 className="multistep-title">Step Three</h1>
      <div className="multistep-form-list">
        <label className="form-label form-label-sm" htmlFor="minMemGib">
          Minimum Memory
          <input className="form-input" type="text" id="minMemGib" value={50} />
        </label>
        <label className="form-label form-label-sm" htmlFor="minStorageGib">
          Minimum Storage
          <input className="form-input" type="text" id="minStorageGib" value={20} />
        </label>
        <label className="form-label form-label-sm" htmlFor="minCpuThreads">
          Minimum CPU Threads
          <input className="form-input" type="text" id="minCpuThreads" value={33} />
        </label>
        <label className="form-label form-label-sm" htmlFor="minCpuCores">
          Minimum CPU Cores
          <input className="form-input" type="text" id="minCpuCores" value={77} />
        </label>
        <label className="form-label form-label-sm" htmlFor="budget">
          Budget
          <input className="form-input" type="text" id="budget" value={23} />
        </label>
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
