// src/pages/Teams/index.js
import React, { useEffect, useState } from 'react';
import { getTeams } from '../../services/api';
import TeamForm from '../../components/TeamForm';
import Header from '../../components/Header';
import './index.css';

function Teams() {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    try {
      const data = await getTeams();
      console.log('Fetched teams:', data);
      setTeams(data);
    } catch (err) {
      console.error('Error fetching teams:', err);
      alert('Failed to fetch teams.');
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div>
    <Header />
    <div className="teams-container">
      <h2>Teams</h2>
      <TeamForm onAdd={fetchTeams} />

      <table className="team-table">
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Description</th>
            <th>Employees</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.name}</td>
              <td>{team.description || 'N/A'}</td>
              <td>
                {team.Employees && team.Employees.length > 0
                  ? team.Employees.map(e => `${e.first_name} ${e.last_name}`).join(', ')
                  : 'No employees'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Teams;
