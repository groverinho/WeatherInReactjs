import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col} from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import './App.css';

const cities= ['Buenos Aries,ar'];
const cities2= ['La Paz,bo', 'Cochabamba,bo', 'Tarija,bo'];

class App extends Component {
  handleWeatherLocationClick = city =>{
    console.log(`handleWeatherLocationClick ${city}` );
  };
  render() {
    return (
    <MuiThemeProvider>
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar title="Weather App"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities={cities2}
                          onSelectedLocation={this.handleWeatherLocationClick}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="detail"></div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    </MuiThemeProvider>
    );
  }
}

export default App;
