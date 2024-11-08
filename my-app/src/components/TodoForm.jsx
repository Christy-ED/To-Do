import React, {useState} from 'react'

export const TodoForm =  props => {
    const[ todo, setTodo] = useState("")

    const handleChange = e => {
        setTodo(e.target.value); 
      
    }

    const handleSubmit = e => {
      e.prentDefault(); //  prevent the submit to reload unless we click the submit button.
      props.adNewTodo(todo);
      setTodo("");
    }

    const handleDelete = e => {
      props.clearCompleted();
    }


    const clearCompleted =() => {
      props.clearCompleted();
    };


  return (
    <>
    <form  style = {{ 
      display: 'flex', 
      flexDirection: 'colum',
      marging: '2%', 
      justifyContent:'center', 
      alignItems: 'center'}} onSubmit={handleSubmit}>
        < label className='col-for-lable' htmlFor='todoInput'></label>
        <input style ={{ width: '15dvw'}}
        className='form-control'
        id= 'todoInput'
        value={todo}
        placeholder='Add new Task'
        onchange={handleChange}/>
        <button style={{margin: '1% 0', width: '12dvw'}} className='btn btn-primary'>
        Add Task</button>

        </form>
        <button className='btn btn-secondary'></button>
        </>
  );
};
