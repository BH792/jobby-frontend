import React, { Component } from  'react';
import JobColumn from './JobColumn'
import styles from '../css/JobsContainer.css'

class JobsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      filteredJobs: {
        watching: [],
        applied: [],
        interviewed: [],
        offer: []
      }
    }
  }

  componentDidMount = () => {
    this.setState({
      filteredJobs: this.separateByJobStatus(this.props.jobs)
    })
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({
      filteredJobs: this.separateByJobStatus(nextProps.jobs)
    })
  }

  separateByJobStatus = (jobs) => {
    let filteredJobs = {
      watching: [],
      applied: [],
      interviewed: [],
      offer: []
    }

    jobs.forEach(job => {
      if (job.active && filteredJobs[job.status]) {
        filteredJobs[job.status].push(job)
      }
    })

    return filteredJobs
  }

  render() {
    return (
      <div className={styles.JobsContainer}>
        <div className={styles.JobsGrid}>

          {Object.keys(this.state.filteredJobs).map(column => {
            const status = column.slice(0,1).toUpperCase() + column.slice(1)
            return (
              <JobColumn
                key={column}
                changeJobStatus={this.props.changeJobStatus}
                changeJobRank={this.props.changeJobRank}
                styleClass={`JobsGrid${status}`}
                title={status}
                jobsList={this.state.filteredJobs[column]}
              />
            )
          })}

        </div>
      </div>
    )
  }
}

export default JobsContainer;
