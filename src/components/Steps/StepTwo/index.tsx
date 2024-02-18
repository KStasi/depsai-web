import { withStores } from '@store';
import { DepStore } from '@store/deployment.store';
import { WithStores } from '@types';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

const stores = {
  dep: DepStore
};

const StepTwoView: WithStores<typeof stores> = ({ dep }) => {
  console.log(toJS(dep), 'dep');

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
    </div>
  );
};

export const StepTwo = withStores(stores)(observer(StepTwoView));
