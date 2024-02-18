import { depStore } from '@store/deployment.store';

interface StepThreeProps {
  next: () => void;
  prev: () => void;
}

export const StepThree: React.FC<StepThreeProps> = ({ next, prev }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    depStore.handleSubmit();
    next();
  };

  return (
    <form className="table table-step" onSubmit={handleSubmit}>
      <h1 className="multistep-title">Step Three</h1>
      <div className="multistep-form-list">
        <label className="form-label form-label-sm" htmlFor="minMemGib">
          Minimum Memory
          <input
            className="form-input"
            type="text"
            id="minMemGib"
            value={depStore.formData.minMemGib}
            onChange={e => depStore.setMinMem(Number(e.target.value))}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="minStorageGib">
          Minimum Storage
          <input
            className="form-input"
            type="text"
            id="minStorageGib"
            value={depStore.formData.minStorageGib}
            onChange={e => depStore.setMinStorage(Number(e.target.value))}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="minCpuThreads">
          Minimum CPU Threads
          <input
            className="form-input"
            type="text"
            id="minCpuThreads"
            value={depStore.formData.minCpuThreads}
            onChange={e => depStore.setMinCpuThreads(Number(e.target.value))}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="minCpuCores">
          Minimum CPU Cores
          <input
            className="form-input"
            type="text"
            id="minCpuCores"
            value={depStore.formData.minCpuCores}
            onChange={e => depStore.setMinCpuCores(Number(e.target.value))}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="budget">
          Budget
          <input
            className="form-input"
            type="text"
            id="budget"
            value={depStore.formData.budget}
            onChange={e => depStore.setBudget(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="btn-copy-container">
        <button className="btn-copy" onClick={() => prev()}>
          prev
        </button>
        <button type="submit" className="btn-copy">
          next
        </button>
      </div>
    </form>
  );
};
