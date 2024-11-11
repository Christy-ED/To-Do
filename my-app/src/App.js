import React, {useReducer} from 'react';
// import components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import reducers
import { todoReducer, initialState } from './reducers/todoReducer';
// imprt tyling
import './App.css';
import 'bootswatch/dist/lux/bootstrap.min.css';


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addNewTodo = item => {
    dispatch({ 
      type: 'ADD_NEW_TODO', 
      payload: item
     });
  };

  const ToggleCompleted = id => {
    dispatch ({
      type: 'TOGGLE_COMPLETED',
      payload: id

    });
  };

  const clearCompleted = () => {
    dispatch({
      type: 'CLEAR_COMPLETED',
      
    });
  };
  return (
    <div className="App">
      <h1 style={{ marginTop: "2%" }}> Todo App </h1>
      <TodoForm addNewTodo={addNewTodo} clearCompleted={clearCompleted} />
    </div>
  );
};

export default App;
