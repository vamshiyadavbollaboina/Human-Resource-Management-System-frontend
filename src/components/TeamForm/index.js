// // import React, { useState } from 'react';
// // import './index.css';
// // import { addTeam } from '../../services/api';

// // function TeamForm({ onAdd }) {
// //   const [name, setName] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await addTeam({ name });
// //       setName('');
// //       onAdd();
// //     } catch (err) {
// //       alert('Failed to add team!');
// //     }
// //   };

// //   return (
// //     <form className="team-form" onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         placeholder="Team Name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //         required
// //       />
// //       <button type="submit">Add Team</button>
// //     </form>
// //   );
// // }

// // export default TeamForm;


// import React, { useState } from 'react';
// import './index.css';
// import { addTeam } from '../../services/api';

// function TeamForm({ onAdd, orgId }) { // pass orgId as prop
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addTeam({ name, description, organisation_id: orgId }); // include orgId
//       setName('');
//       setDescription('');
//       onAdd();
//     } catch (err) {
//       alert('Failed to add team!');
//       console.error(err);
//     }
//   };

//   return (
//     <form className="team-form" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Team Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button type="submit">Add Team</button>
//     </form>
//   );
// }

// export default TeamForm;


// src/components/TeamForm.js
import React, { useState } from 'react';
import { addTeam } from '../../services/api';
import './index.css';

function TeamForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTeam({ name, description });
      setName('');
      setDescription('');
      onAdd();
    } catch (err) {
      console.error('Add team error:', err);
      alert('Failed to add team!');
    }
  };

  return (
    <form className="team-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Team Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Team</button>
    </form>
  );
}

export default TeamForm;
