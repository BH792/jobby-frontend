import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { ItemTypes } from '../constants/Constants';
import styles from '../css/JobsContainer.css'

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

class JobColumn extends Component {
  render() {
    const { styleClass, title, connectDropTarget } = this.props
    return connectDropTarget(
      <div className={styles[styleClass]}>
        <div>{title}</div>
        {this.props.children}
      </div>
    )
  }
}

export default DropTarget(ItemTypes.CARD, cardColumnTarget, collect)(JobColumn)
