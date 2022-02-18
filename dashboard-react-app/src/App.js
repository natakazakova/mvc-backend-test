import React from 'react';
import './App.css';
import DashboardControl from 'devexpress-dashboard-react';

function App() {  
  return (
    <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
      <DashboardControl style={{ height: '100%' }} 
        endpoint="https://localhost:44385/api/dashboard">
      </DashboardControl>
  </div>
  );
}

export default App;