import { Connect } from '@components/example';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title" data-text="Depsai">
        <Link to="/">Depsai</Link>
      </h1>
      <Connect />
    </header>
  );
};
