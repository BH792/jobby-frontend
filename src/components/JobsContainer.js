import React, { Component } from "react";
import JobColumn from "./JobColumn";
import styles from "../css/JobsContainer.css";
import Modal from "./Modal";
import NewJob from "./NewJob";

class JobsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredJobs: {
        watching: [],
        applied: [],
        interviewed: [],
        offer: []
      }
    };
  }

  componentDidMount = () => {
    this.setState({
      filteredJobs: this.separateByJobStatus(this.props.jobs)
    });
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      filteredJobs: this.separateByJobStatus(nextProps.jobs)
    });
  };

  separateByJobStatus = jobs => {
    let filteredJobs = {
      watching: [],
      applied: [],
      interviewed: [],
      offer: []
    };

    jobs.forEach(job => {
      if (job.active && filteredJobs[job.status]) {
        filteredJobs[job.status].push(job);
      }
    });

    return filteredJobs;
  };

  addJobRankToNewJob = job => {
    const newJob = job;
    const allRanks = {};
    let maxRank = 0;
    this.props.jobs.forEach(job => {
      allRanks[job.rank] = true;
      if (newJob.status === job.status && maxRank < job.rank) {
        maxRank = job.rank + 1;
      }
    });

    while (allRanks[maxRank]) maxRank++;
    newJob.rank = maxRank;
    this.props.createJob(newJob);
  };

  render() {
    return (
      <div className={styles.JobsContainer}>
        <div className={styles.JobsGrid}>
          {Object.keys(this.state.filteredJobs).map(column => {
            const status = column.slice(0, 1).toUpperCase() + column.slice(1);
            return (
              <JobColumn
                key={column}
                changeJobStatus={this.props.changeJobStatus}
                changeJobRank={this.props.changeJobRank}
                styleClass={`JobsGrid${status}`}
                title={status}
                jobsList={this.state.filteredJobs[column]}
                moveJob={this.props.moveJob}
              />
            );
          })}
        </div>
        <Modal
          toggleModal={this.props.toggleModal}
          isOpen={this.props.isModalOpen}
        >
          <NewJob
            addJob={this.addJobRankToNewJob}
            closeModal={this.props.toggleModal}
          />
        </Modal>
      </div>
    );
  }
}

export default JobsContainer;
