import { withStores } from '@store';
import { DepStore } from '@store/deployment.store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

interface StepOneProps {
  next: () => void;
}

const stores = {
  dep: DepStore
};

export const StepOneView: WithStores<typeof stores, StepOneProps> = ({ next, dep }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    next();
  };

  return (
    <form className="table table-step" onSubmit={handleSubmit}>
      <h1 className="multistep-title">Step One</h1>
      <div className="multistep-form">
        <label className="form-label" htmlFor="amount">
          Docker image
          <input
            className="form-input"
            type="text"
            value={dep.formData.image}
            onChange={e => dep.setImage(e.target.value)}
          />
        </label>
        <label className="form-label" htmlFor="amount">
          Port
          <input
            className="form-input"
            type="text"
            value={dep.formData.port}
            onChange={e => dep.setPort(e.target.value)}
          />
        </label>
        <label className="form-label" htmlFor="amount">
          Run command
          <input
            className="form-input"
            type="text"
            value={dep.formData.runCommand}
            onChange={e => dep.setRunCommand(e.target.value)}
          />
        </label>
      </div>
      <button type="submit" className="btn-copy">
        Next
      </button>
    </form>
  );
};

export const StepOne = withStores(stores)(observer(StepOneView));
