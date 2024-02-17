import { ReactNode } from 'react';

import { Header } from '@components/Header/index';

interface ContentProps {
  children: ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="content">
      <Header />
      <div className="form">{children}</div>
    </div>
  );
};
