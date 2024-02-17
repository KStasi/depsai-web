import { Link } from 'react-router-dom';

export const Table = () => {
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
          <tr className="table-tr">
            <td className="table-td">Example</td>
            <td className="table-td">Check</td>
            <td className="table-td">
              <a href="#" className="table-link">
                link
              </a>
            </td>
            <td className="table-td">
              <button className="btn-manage">manage</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
