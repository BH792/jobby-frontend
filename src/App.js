import React, { Component } from 'react';
import JobsContainer from './components/JobsContainer'

//TODO remove
import Jobs from './mock_data/jobs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <JobsContainer jobs={Jobs}/>
      </div>
    );
  }
}

export default App;
