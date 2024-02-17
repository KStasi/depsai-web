import { Balances } from '@components/example/wagmi/balances';

export const Sidebar = () => {
  return (
    <aside className="sidebar-wrapper">
      <Balances />
      <div className="btns-container">
        <button className="btn btn-primary">deposit</button>
        <button className="btn btn-secondary">withdraw</button>
      </div>
    </aside>
  );
};
