import React, { Component } from 'react';

import './styles.css';

import Form from './components/Form/Form';
import Title from './components/Title/Title';
import Result from './components/Result/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="appContainer">
        <div className="innerContainer">
          <Title />
          <Form />
          <Result />
        </div>
      </div>
    );
  }
}

export default App;
