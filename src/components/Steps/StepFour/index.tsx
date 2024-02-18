interface StepFourProps {
  next: () => void;
  prev: () => void;
}

export const StepFour: React.FC<StepFourProps> = ({ next, prev }) => {
  return (
    <div className="table table-step">
      <h1 className="multistep-title">Step Four</h1>
      <span className="multistep-info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, maxime!
      </span>
      <ul className="multistep-list">
        <li className="multistep-item multistep-list-header">
          <span>Web services subtotal</span>
          <span>$48.00</span>
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
        <button className="btn-copy" onClick={() => next()}>
          next
        </button>
      </div>
    </div>
  );
};
