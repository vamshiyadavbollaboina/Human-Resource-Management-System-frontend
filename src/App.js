// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import RegisterOrg from './pages/RegisterOrg';
// import Employees from './pages/Employees';
// import Teams from './pages/Teams';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" Component={<Login />} />
//         <Route path="/register-org" element={<RegisterOrg />} />
//         <Route path="/employees" element={<Employees />} />
//         <Route path="/teams" element={<Teams />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
// 1. Corrected Import: Use Routes instead of Switch
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Login from './pages/Login';
import RegisterOrg from './pages/RegisterOrg';
import Employees from './pages/Employees';
import Teams from './pages/Teams';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<RegisterOrg />} /> 
        <Route path="/employees" element={<Employees />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

