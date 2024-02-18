import { withStores } from '@store';
import { DepStore } from '@store/deployment.store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

interface StepTwoProps {
  next: () => void;
  prev: () => void;
}

const stores = {
  dep: DepStore
};

export const StepTwoView: WithStores<typeof stores, StepTwoProps> = ({ next, prev, dep }) => {
  const handleKeysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dep.setKeys(event.target.value);
  };

  const handleValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dep.setValues(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    next();
  };

  return (
    <form className="table table-step" onSubmit={handleSubmit}>
      <h1 className="multistep-title">Step Two</h1>
      <span className="multistep-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, maxime!
      </span>
      <div className="multistep-form-grid">
        <label className="form-label form-label-sm" htmlFor="keys">
          Keys
          <input
            className="form-input"
            type="text"
            id="keys"
            value={dep.formData.keys}
            onChange={handleKeysChange}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="values">
          Values
          <input
            className="form-input"
            type="text"
            id="values"
            value={dep.formData.values}
            onChange={handleValuesChange}
          />
        </label>
        <i className="btn-add">+</i>
      </div>
      <div className="btn-copy-container">
        <button className="btn-copy" onClick={() => prev()}>
          prev
        </button>
        <button type="submit" className="btn-copy">
          Next
        </button>
      </div>
    </form>
  );
};

export const StepTwo = withStores(stores)(observer(StepTwoView));
