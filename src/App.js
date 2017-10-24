import React, { Component } from "react";
import JobsContainer from "./components/JobsContainer";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
//TODO remove
import Jobs from "./mock_data/jobs";

class App extends Component {
  state = {
    jobs: Jobs,
    isModalOpen: false
  };

  moveJob = (id, curStatus, newStatus, dragRank, hoverRank) => {
    console.log(
      "\nid: ",
      id,
      "\ncurStatus: ",
      curStatus,
      "\nnewStatus: ",
      newStatus,
      "\ndragRank: ",
      dragRank,
      "\nhoverRank: ",
      hoverRank
    );
    this.setState(prevState => {
      return {
        jobs: prevState.jobs.map(job => {
          if (job.rank === dragRank) {
            job.rank = hoverRank;
            job.status = newStatus;
            return job;
          }
          if (dragRank < hoverRank) {
            if (job.rank > dragRank && job.rank <= hoverRank) {
              job.rank -= 1;
            }
          } else {
            if (job.rank < dragRank && job.rank >= hoverRank) {
              job.rank += 1;
            }
          }
          return job;
        })
      };
    });
  };

  changeJobStatus = (id, status) => {
    this.setState({
      jobs: this.state.jobs.map(job => {
        if (job.id === id) {
          job.status = status;
        }
        return job;
      })
    });
  };

  changeJobRank = (dragRank, hoverRank, status) => {
    this.setState({
      jobs: this.state.jobs.map(job => {
        if (job.status === status) {
          if (job.rank === dragRank) {
            job.rank = hoverRank;
            return job;
          }
          if (dragRank < hoverRank) {
            if (job.rank > dragRank && job.rank <= hoverRank) {
              job.rank -= 1;
            }
          } else {
            if (job.rank < dragRank && job.rank >= hoverRank) {
              job.rank += 1;
            }
          }
        }

        return job;
      })
    });
  };

  createJob = job => {
    this.setState({
      jobs: [...this.state.jobs, job]
    });
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    return (
      <div className="App">
        <JobsContainer
          jobs={this.state.jobs}
          changeJobStatus={this.changeJobStatus}
          changeJobRank={this.changeJobRank}
          moveJob={this.moveJob}
          createJob={this.createJob}
          toggleModal={this.toggleModal}
          isModalOpen={this.state.isModalOpen}
        />
        <button
          onClick={this.toggleModal}
          className="jobBtn"
          style={{
            height: "50px",
            width: "50px",
            "border-radius": "25px",
            "background-color": "green",
            color: "white",
            "font-size": "28px"
          }}
        >
          +
        </button>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
