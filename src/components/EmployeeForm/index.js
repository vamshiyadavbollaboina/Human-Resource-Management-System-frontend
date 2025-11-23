import React, { useState } from 'react';
import './index.css';
import Header from '../Header';
import { addEmployee } from '../../services/api';

function EmployeeForm({ onAdd }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee({
        first_name: firstName,
        last_name: lastName,
        email,
        phone
      });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      onAdd();
    } catch (err) {
      alert('Failed to add employee!');
      console.error('Add employee error:', err);
    }
  };

  return (
    <div>
    <form className="employee-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
    </div>
  );
}

export default EmployeeForm;
