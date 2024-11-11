import React from 'react';

const Todo = props => {
  const toogleCompleted = () => {
    props.toogleCompleted(props.item.id);
  };


  return (
    <div className= {`card text-white bg-primary mb-3 item${props.item.completed ? 'completed' : ''} `}
     style={{width: '20dvw', marginTop: '2%'}} onClick={toogleCompleted}>
      <div className='card-body'>
      <p className='card-Text'>{props.item.item}</p>
      
      </div>

    </div>
  )
}

export default Todo;