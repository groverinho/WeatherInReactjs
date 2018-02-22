import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';

const cities= ['Buenos Aries,ar'];
const cities2= ['La Paz,bo', 'Cochabamba,bo', 'Tarija,bo'];

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <LocationList cities={cities2}></LocationList>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;