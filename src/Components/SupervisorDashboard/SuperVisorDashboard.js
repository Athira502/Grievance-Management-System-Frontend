import './SuperVisorDashboard.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SuperVDashboard() {

  const navigate = useNavigate();
  const [grievances, setGrievances] = useState([]);

  useEffect(() => {
    const grievances = [
      {
        id: 1,
        user: { name: 'Mary', email: 'mary@user1.com'},
        description: 'Issue regarding the cloud services',
        status: 'PENDING',
        category: 'Cloud',
        assignee: 'Sidhique',
      },
      {
        id: 2,
        user: { name: 'Sural', email: 'user2@gmail.com'},
        description: 'High network usage and bandwidth issues',
        status: 'under maintanance',
        category: 'network related',
        assignee: 'Krishna',
      },
      {
        id: 3,
        user: { name: 'Gayathri', email: 'user2@gmail.com'},
        description: 'Unable to access the db',
        status: 'Pending',
        category: 'Database',
        assignee: 'Daya',
      },
      {
        id: 4,
        user: { name: 'Bond', email: 'user4@gmail.com'},
        description: 'Several customers are unable to login ',
        status: 'PENDING',
        category: 'Office customer App',
        assignee: 'Sidhique',
      }
    ];

    const sortedGrievances = grievances.sort((a, b) => new Date(b.assignedDate) - new Date(a.assignedDate));
    setGrievances(sortedGrievances);
  }, []);

  const handleRowSelect = (grievance) => {
    navigate(`/grievances/${grievance.id}`, { state: { grievance } });
  };

  return (
    <div className='griev'>
      <h2>Pending Grievances</h2>
      <table className="grievance-table">
        <thead>
          <tr>
            <th>Grievance id</th>
            <th>Name</th>
            <th>Product</th>
            <th>Engineer</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {grievances.length === 0 ? (
            <tr>
              <td colSpan="5">No grievances yet.</td>
            </tr>
          ) : (
            grievances.map((grievance) => (
              <tr key={grievance.id} onClick={() => handleRowSelect(grievance)}>
                <td>{grievance.id}</td>
                <td>{grievance.user.name}</td>
                <td>{grievance.category}</td>
                <td>{grievance.assignee}</td>
                <td>{grievance.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SuperVDashboard;
