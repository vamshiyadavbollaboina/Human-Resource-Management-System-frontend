import React, { useEffect, useState } from 'react';
import './index.css';
import { getEmployees } from '../../services/api';
import EmployeeForm from '../../components/EmployeeForm';
import Header from '../../components/Header';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  return (
    <div>
      <Header/>
      <div className="employees-container">
      <h2>Employees</h2>
      <EmployeeForm onAdd={fetchEmployees} />

      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.first_name} {emp.last_name}</td>
              <td>{emp.email || 'N/A'}</td>
              <td>{emp.phone || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
}

export default Employees;
