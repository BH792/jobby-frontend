import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from '../constants/Constants';
import styles from '../css/JobsContainer.css'
import JobCard from './JobCard'


const maxRank = (jobsArray) => {
  let maxRank = 0
  jobsArray.forEach(job => {
    if (job.rank > maxRank) {
      maxRank = job.rank
    }
  })
  return maxRank
}

const cardColumnTarget = {
  drop(props, monitor, component) {
    let dragRank = monitor.getItem().rank
    let hoverRank = maxRank(props.jobsList)
    if (hoverRank < dragRank) {
      hoverRank ++
    }

    return {
      id: monitor.getItem().id,
      curStatus: monitor.getItem().status,
      newStatus: props.title.toLowerCase(),
      dragRank,
      hoverRank
    }
    // props.changeJobStatus(monitor.getItem().id, props.title.toLowerCase())
  },
  canDrop(props, monitor) {
    return monitor.isOver({ shallow: true })
  }
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const JobColumn = ({ styleClass, title, connectDropTarget, jobsList, changeJobRank, moveJob}) => {
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
          moveJob={moveJob}
        />
      })}
    </div>
  )
}

export default DropTarget(ItemTypes.CARD, cardColumnTarget, collect)(JobColumn)
