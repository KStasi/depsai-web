import { depStore } from '@store/deployment.store';

interface StepFourProps {
  next: () => void;
  prev: () => void;
}

export const StepFour: React.FC<StepFourProps> = ({ next, prev }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    depStore.handleSubmit();
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
          <span>promprtproe-ai-parser</span>
          <span>$24.00</span>
        </li>
        <li className="multistep-item">
          <span>promprtproe-ai-parser</span>
          <span>$24.00</span>
        </li>
        <li className="multistep-item multistep-list-footer">
          <span>monthly app cost</span>
          <span>$48.00</span>
        </li>
      </ul>
      <div className="btn-copy-container">
        <button className="btn-copy" onClick={() => prev()}>
          prev
        </button>
        <button type="submit" className="btn-copy" onClick={() => next()}>
          next
        </button>
      </div>
    </form>
  );
};
