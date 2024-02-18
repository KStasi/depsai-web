import { DeploymentDetails, depsaiApi } from '@api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WagmiStore } from '@modules/wagmi';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';

const stores = {
  wagmi: WagmiStore
};

const shortifyHash = (hash: string) => {
  return hash.slice(0, 6) + '...' + hash.slice(-6);
};
const TableView: WithStores<typeof stores> = ({ wagmi }) => {
  const [deployments, setDeployments] = useState([] as DeploymentDetails[]);

  useEffect(() => {
    if (!wagmi.account.address) return;
    depsaiApi
      .getDeployments(wagmi.account.address)
      .then(d => {
        setDeployments(d);
      })
      .catch(console.log);
  });

  return (
    <div className="form-content">
      <button className="form-btn btn btn-primary">
        <Link to="/deployment">Create new</Link>
      </button>
      <table className="table">
        <thead className="table-head">
          <tr className="table-tr">
            <th className="table-th">Name</th>
            <th className="table-th">Status</th>
            <th className="table-th">Link</th>
            <th className="table-th">Manage</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {deployments.map((d, i) => (
            <tr className="table-tr" key={i}>
              <td className="table-td">{shortifyHash(d.package)}</td>
              <td className="table-td">{'Active'}</td>
              <td className="table-td">
                <a href={d.link} className="table-link">
                  link
                </a>
              </td>
              <td className="table-td">
                <button className="btn-manage">manage</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Table = withStores(stores)(observer(TableView));
