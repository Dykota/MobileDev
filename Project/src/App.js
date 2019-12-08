import React from 'react';
import './App.css';
import Contacts from './components/Contacts';
import Profile from './components/Profile';
import Add from './components/Add';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Add />
        <Profile />
        <hr />
        <Contacts />
      </div>
    );
  }
}

export default App;