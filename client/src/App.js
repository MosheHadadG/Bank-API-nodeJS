import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import './App.css';

// import Users from './components/users/Users';
import AdminPage from './screens/admin_page/AdminPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Route exact path="/"><Link to='/admin'>Admin</Link></Route>
      <Route exact path="/admin" component={AdminPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
