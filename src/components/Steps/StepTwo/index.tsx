import { useState } from 'react';

import { depStore } from '@store/deployment.store';
import { observer } from 'mobx-react-lite';

interface StepTwoProps {
  next: () => void;
  prev: () => void;
}

export const StepTwo: React.FC<StepTwoProps> = observer(({ next, prev }) => {
  const [keys, setKeys] = useState('');
  const [values, setValues] = useState('');

  const handleKeysChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeys(event.target.value);
    depStore.setKeys(event.target.value);
  };

  const handleValuesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(event.target.value);
    depStore.setValues(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    depStore.handleSubmit();
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
            value={keys}
            onChange={handleKeysChange}
          />
        </label>
        <label className="form-label form-label-sm" htmlFor="values">
          Values
          <input
            className="form-input"
            type="text"
            id="values"
            value={values}
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
});
