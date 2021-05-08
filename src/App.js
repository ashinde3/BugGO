import React from 'react';
import {useSelector} from 'react-redux';
import Login from './Views/Login/login'
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './Views/Sidebar/sidebar';
//import './App.css';


function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {!auth.LoggedIn ? <Login /> : 
        <div>
          <Sidebar />
        </div>
      }
    </Router>
  );
}

export default App;
