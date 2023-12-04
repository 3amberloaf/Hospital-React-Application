import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import the Sidebar component
import Dashboard from './Dashboard';
import AddPatient from './AddPatient';
import SearchPage from './SearchPage';

function App() {
  return (
    <Router>
      <div>
        <Sidebar /> {/* Use the Sidebar component here */}
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/AddPatient" component={AddPatient} />
          <Route path="/SearchPage" component={SearchPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
