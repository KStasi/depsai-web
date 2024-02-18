import { Balances } from '@components/example/wagmi/balances';

interface SidebarProps {
  onButtonClick: (contentType: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onButtonClick }) => {
  return (
    <aside className="sidebar-wrapper">
      <Balances />
      <div className="btns-container">
        <button className="btn btn-primary" onClick={() => onButtonClick('deposit')}>
          deposit
        </button>
        <button className="btn btn-secondary" onClick={() => onButtonClick('withdraw')}>
          withdraw
        </button>
      </div>
    </aside>
  );
};
