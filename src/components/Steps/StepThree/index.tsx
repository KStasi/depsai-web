import { withStores } from '@store';
import { DepStore } from '@store/deployment.store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

interface StepThreeProps {
  next: () => void;
  prev: () => void;
}

const stores = {
  dep: DepStore
};

export const StepThreeView: WithStores<typeof stores, StepThreeProps> = ({ next, prev, dep }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
            value={dep.formData.minMemGib}
            onChange={e => dep.setMinMem(Number(e.target.value))}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="minStorageGib">
          Minimum Storage
          <input
            className="form-input"
            type="text"
            id="minStorageGib"
            value={dep.formData.minStorageGib}
            onChange={e => dep.setMinStorage(Number(e.target.value))}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="minCpuThreads">
          Minimum CPU Threads
          <input
            className="form-input"
            type="text"
            id="minCpuThreads"
            value={dep.formData.minCpuThreads}
            onChange={e => dep.setMinCpuThreads(Number(e.target.value))}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="minCpuCores">
          Minimum CPU Cores
          <input
            className="form-input"
            type="text"
            id="minCpuCores"
            value={dep.formData.minCpuCores}
            onChange={e => dep.setMinCpuCores(Number(e.target.value))}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="budget">
          Budget
          <input
            className="form-input"
            type="text"
            id="budget"
            value={dep.formData.budget}
            onChange={e => dep.setBudget(Number(e.target.value))}
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

export const StepThree = withStores(stores)(observer(StepThreeView));
