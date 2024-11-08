import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const[value, setValue] = useState(task.task)

    // const handleChange = e => {
    //   setTodo(e.target.value);
    // }

    // const handleSubmit = e => {
    //     e.preventDefault(); // prevent the submit to reload unless we click the submit button.
    //     props.addNewToo(odo);
    //     setTodo('');

    // }

    // const clearCompleted = () => {
    //   props.clearCompleted();

    };


  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="" className='todo-input'
          value={value} placeholder='Update Task'
          onChange= {(e) => setValue(e.target.value)}/>
         <button type='submit' className='todo-btn'>Update Task</button>
        
        </form>
  )
}



