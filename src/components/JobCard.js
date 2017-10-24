import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styles from '../css/JobCard.css';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from '../constants/Constants';

const cardSource = {
  beginDrag(props, monitor, component) {
    return {
      id: props.job.id,
      rank: props.job.rank,
      status: props.job.status
    }
  },
  endDrag(props, monitor, component) {
    if (monitor.getDropResult()) {
      const {
        id,
        curStatus,
        newStatus,
        dragRank,
        hoverRank
      } = monitor.getDropResult()
      props.moveJob(id, curStatus, newStatus, dragRank, hoverRank)
    }
  }
}

const dragCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const cardTarget = {
  // hover(props, monitor, component) {
  //   const id = monitor.getItem().id
  //   const curStatus = monitor.getItem().status
  //   const newStatus = props.job.status
  //   const dragRank = monitor.getItem().rank
  //   const hoverRank = props.job.rank
  //
  //   if (dragRank === hoverRank) {
  //     return
  //   }
  //
  //   // Determine rectangle on screen
  //   const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
  //
  //   // Get vertical middle
  //   const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
  //
  //   // Determine mouse position
  //   const clientOffset = monitor.getClientOffset()
  //
  //   // Get pixels to the top
  //   const hoverClientY = clientOffset.y - hoverBoundingRect.top
  //
  //   // Dragging downwards
	// 	if (dragRank < hoverRank && hoverClientY < hoverMiddleY) {
	// 		return
	// 	}
  //
	// 	// Dragging upwards
	// 	if (dragRank > hoverRank && hoverClientY > hoverMiddleY) {
	// 		return
	// 	}
  //   props.moveJob(id, curStatus, newStatus, dragRank, hoverRank)
  //   // props.changeJobRank(dragRank, hoverRank, props.job.status)
  //   monitor.getItem().rank = hoverRank
  // },
  // canDrop(props, monitor) {
  //   const dragRank = monitor.getItem().rank
  //   const hoverRank = props.job.rank
  //
  //   if (dragRank === hoverRank) {
  //     return false
  //   } else {
  //     return true
  //   }
  // },
  drop(props, monitor, component) {
    return {
      id: monitor.getItem().id,
      curStatus: monitor.getItem().status,
      newStatus: props.job.status,
      dragRank: monitor.getItem().rank,
      hoverRank: props.job.rank
    }
  }
}

const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class JobCard extends Component {
  color = (num) => {
    switch (num) {
      case 0:
        return 'BurlyWood';
      case 1:
        return 'Salmon';
      case 2:
        return 'CornflowerBlue';
      case 3:
        return 'DarkRed';
      case 4:
        return 'DarkViolet';
      case 5:
        return 'GoldenRod';
      case 6:
        return 'Green';
      case 7:
        return 'Indigo';
      case 8:
        return 'LightGrey';
      case 9:
        return 'Olive';
      default:
        return 'black';
    }
  }

  render() {
    const { job, connectDragSource, connectDropTarget, isDragging } = this.props
    const opacity = isDragging ? 0 : 1
    return connectDragSource(
      connectDropTarget(
        <div className={styles.JobCard} style={{opacity: opacity}}>
          <div className={styles.JobCardHeader} style={{backgroundColor: this.color(job.id)}}>
            <h4>{job.title}</h4>
            <p>{job.company.name}</p>
          </div>
          <center><p>{job.rank}</p></center>
        </div>
      )
    )
  }
}

const dropJobCard = DropTarget(ItemTypes.CARD, cardTarget, dropCollect)(JobCard)
export default DragSource(ItemTypes.CARD, cardSource, dragCollect)(dropJobCard);
