import { useState } from 'react';

import { depStore } from '@store/deployment.store';
import { observer } from 'mobx-react-lite';

interface StepOneProps {
  next: () => void;
}

export const StepOne: React.FC<StepOneProps> = observer(({ next }) => {
  const [inputData, setAmount] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
    depStore.setAmount(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    depStore.handleSubmit();
    next();
  };

  return (
    <form className="table table-step" onSubmit={handleSubmit}>
      <h1 className="multistep-title">Step One</h1>
      <div className="multistep-form">
        <label className="form-label" htmlFor="amount">
          Amount
          <input
            className="form-input"
            type="text"
            id="amount"
            value={inputData}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit" className="btn-copy">
        Next
      </button>
    </form>
  );
});
