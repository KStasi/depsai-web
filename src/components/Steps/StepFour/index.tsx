import { withStores } from '@store';
import { DepStore } from '@store/deployment.store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

interface StepFourProps {
  next: () => void;
  prev: () => void;
}

const stores = {
  dep: DepStore
};

export const StepFourView: WithStores<typeof stores, StepFourProps> = ({ next, prev, dep }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await dep.handleSubmit();
    next();
  };

  return (
    <form className="table table-step" onSubmit={handleSubmit}>
      <h1 className="multistep-title">Step Four</h1>
      <span className="multistep-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, maxime!
      </span>
      <ul className="multistep-list">
        <li className="multistep-item multistep-list-header">
          <label>Web services subtotal</label>
          <input type="text" value="$48.00" readOnly={true} />
        </li>
        <li className="multistep-item">
          <label>promprtproe-ai-parser</label>
          <input type="text" value="$24.00" readOnly={true} />
        </li>
        <li className="multistep-item">
          <label>promprtproe-ai-parser2</label>
          <input type="text" value="$24.00" readOnly={true} />
        </li>
        <li className="multistep-item multistep-list-footer">
          <label>monthly app cost</label>
          <input type="text" value="$48.00" readOnly={true} />
        </li>
      </ul>
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

export const StepFour = withStores(stores)(observer(StepFourView));
