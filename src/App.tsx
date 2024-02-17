import { Sandwich } from '@providers/sandwich';
import { Router } from '@router';

import './assets/scss/style.scss';
import './assets/fonts/Orbitron/stylesheet.css';

export const App = () => {
  return (
    <Sandwich>
      <Router />
    </Sandwich>
  );
};
