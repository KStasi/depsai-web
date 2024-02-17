import { Form } from '@components/Form/index';
import { Header } from '@components/Header/index';
import { Sidebar } from '@components/Sidebar/index';

export const HomePage = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="form">
          <Form />
          <button className="btn-link">
            <i className="btn-icon icon-back" />
            back
          </button>
        </div>
      </div>
    </div>
  );
};
