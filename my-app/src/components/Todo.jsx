import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = props => {
  const toggleComplete = () => {
    props.toggleComplete(props.item.id);
  };

  return (
    <div className= {` card text-white bg-primary mb-3 item${propsitem.completed? 'completed': ''}`} 
    style={{width}} 
    >
      

    
      
      </div>
  )
}
