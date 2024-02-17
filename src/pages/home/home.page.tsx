import React from 'react';

import { Connect } from '@components/example';
import { Balances } from '@components/example/wagmi/balances';

export const HomePage = () => {
  return (
    <div className="container">
      <aside className="sidebar-wrapper">
        <Balances />
        <div className="btns-container">
          <button className="btn btn-primary">replenish</button>
          <button className="btn btn-secondary">withdraw</button>
        </div>
      </aside>
      <div className="content">
        <header className="header">
          <h1 className="header-title">Title</h1>
          <Connect />
        </header>
        <div className="form">
          <label className="form-label" htmlFor="amount">
            Amount
          </label>
          <input className="form-input" type="text" id="amount" />
        </div>
      </div>
    </div>
  );
};
