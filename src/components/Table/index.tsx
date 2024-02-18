import { useEffect, useState } from 'react';

import { DeploymentDetails, depsaiApi } from '@api';
import { WagmiStore } from '@modules/wagmi';
import { withStores } from '@store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const stores = {
  wagmi: WagmiStore
};

const shortifyHash = (hash: string) => {
  return hash.slice(0, 6) + '...' + hash.slice(-6);
};
const TableView: WithStores<typeof stores> = ({ wagmi }) => {
  const [deployments, setDeployments] = useState([] as DeploymentDetails[]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!wagmi.account.address) {
        return;
      }

      depsaiApi
        .getDeployments(wagmi.account.address)
        .then(d => {
          setDeployments(d);
        })
        .catch(console.log);
    }, 1500);

    return () => clearInterval(interval);
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
            <th className="table-th">Package</th>
            <th className="table-th">Link</th>

            <th className="table-th">Status</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {deployments.map((d, i) => (
            <tr className="table-tr" key={i}>
              <td className="table-td">{d.generatedId}</td>
              <td className="table-td">
                {d.status !== 'deploying' ? shortifyHash(d.package) : 'Waiting for package...'}
              </td>
              <td className="table-td">
                {d.status === 'deployed' ? (
                  <a href={d.link} className="table-link">
                    link
                  </a>
                ) : (
                  'Waiting for deployment...'
                )}
              </td>
              <td className="table-td">
                {{
                  deploying: 'Deploying...',
                  'image created': 'Image builded',
                  deployed: 'Deployed'
                }[d.status] || 'Unknown'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Table = withStores(stores)(observer(TableView));
