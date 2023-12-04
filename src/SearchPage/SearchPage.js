import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import your Sidebar component
import AddPatientForm from './AddPatientForm'; // Import other components
import SearchPage from './SearchPage'; // Import the SearchPage component

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/add-patient">
            <AddPatientForm />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          {/* Add more routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
