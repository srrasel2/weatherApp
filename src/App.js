import React, { Component } from 'react';
import Form from './components/Form/Form';
import { Para } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Para />
        <Form />
      </div>
    );
  }
}

export default App;
