import React, { Component } from 'react';
import logo from './logo.svg';
import Homepage from './components/Home';
import './App.css';

import { Thumbnail,
         Button,
         Col,
         Grid,
         Row} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Grid>
          <Row className="show-grid">
            <Col md={3} mdOffset={1}>
                <Homepage
                word = "Budget" />
            </Col>
            <Col md={3} mdOffset={1}>
                <Homepage
                word = "Usage" />
            </Col>
            <Col md={3} mdOffset={1}>
                <Homepage
                word = "Save" />
            </Col>
        </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
