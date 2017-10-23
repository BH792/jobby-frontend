import React, { Component } from 'react';
import JobsContainer from './components/JobsContainer'

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd'
//TODO remove
import Jobs from './mock_data/jobs'

class App extends Component {
  state = {
    jobs: Jobs
  }

  changeJobStatus = (id, status) => {
    this.setState({
      jobs: this.state.jobs.map(job => {
        if (job.id === id) {
          job.status = status
        }
        return job 
      })
    })
  }

  render() {
    return (
      <div className="App">
        <JobsContainer
          jobs={this.state.jobs}
          changeJobStatus={this.changeJobStatus}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
