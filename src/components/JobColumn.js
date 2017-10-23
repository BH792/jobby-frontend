import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from '../constants/Constants';
import styles from '../css/JobsContainer.css'
import JobCard from './JobCard'

const cardColumnTarget = {
  drop(props, monitor, component) {
    props.changeJobStatus(monitor.getItem().id, props.title.toLowerCase())
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const JobColumn = ({ styleClass, title, connectDropTarget, jobsList, changeJobRank }) => {
  const sortColumn = (unsortedJobs) => {
    const sortedJobs = [...unsortedJobs]
    return sortedJobs.sort((a, b) => {
      if (a.rank < b.rank) {
        return -1;
      } else {
        return 1;
      }
    })
  }

  return connectDropTarget(
    <div className={styles[styleClass]}>
      <div>{title}</div>
      {sortColumn(jobsList).map(job => {
        return <JobCard
          job={job}
          key={job.id}
          changeJobRank={changeJobRank}
        />
      })}
    </div>
  )
}

export default DropTarget(ItemTypes.CARD, cardColumnTarget, collect)(JobColumn)
